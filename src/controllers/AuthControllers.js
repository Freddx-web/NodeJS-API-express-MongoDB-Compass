/*
*
* Users Controllers
*
*/

// import
import bcrypt from "bcryptjs";
import User from "../model/Schema.Users.js";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js"

// POST- Register 
const register = async (req, res, next) => {  
  try {
    
    const { username, email, password } = req.body;
    //Validation
    if (username === undefined || email === undefined || password === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 
    else { 

      // Found User Email
      const userFound = await User.findOne({ email });

      if (userFound)
        return res.status(400).json({
        message: ["The email is already in use"],
      });

      // hashing the password
      const passwordHash = await bcrypt.hash(password, 10);

      // creating the user
      const newUser = new User({
        username,
        email,
        password: passwordHash,
      });

      // saving the user in the database
      const userSaved = await newUser.save();
      
      // create access token
      const token = await createAccessToken({
        id: userSaved._id,
      });

      // Cookies
      res.cookie("token", token, {
        httpOnly: process.env.NODE_ENV !== "development",
        secure: true,
        sameSite: "none",
      });

      // Resquest
      res.status(201).json({ 
        message: "POST - Register",
        username, email, password, userSaved, token
      });
    }

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Login
const login = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    if (email === undefined || password === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 

    else { 
      // Found User Email
      const userFound = await User.findOne({ email })

      if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

      // Compare password validation
      const isMatch = await bcrypt.compare(password, userFound.password);
      if (!isMatch) {
        return res.status(400).json({
          message: ["The password is incorrect"],
        });
      }

      // Token
      const token = await createAccessToken({
        id: userFound._id,
        username: userFound.username,
      });

      // Cookies
      res.cookie("token", token, {
        httpOnly: process.env.NODE_ENV !== "development",
        secure: true,
        sameSite: "none",
      });
      
      // Resquest
      res.status(201).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });

    }

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

// Export
export const methods = { 
    register,   //Post
    login,      //Post
    verifyToken,// Get
    logout      
}