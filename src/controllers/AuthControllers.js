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

// POST- Register 
const register = async (req, res, next) => {  
  try {

    const { username, email, password } = req.body;

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
      
      const userFound = await User.findOne({ email })

      if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });
      
      const isMatch = await bcrypt.compare(password, userFound.password);
      
      if (!isMatch) {
        return res.status(400).json({
          message: ["The password is incorrect"],
        });
      }


      
      /*

       const token = await createAccessToken({
        id: userFound._id,
        username: userFound.username,
      });

      const createAccessToken = async (req, res, next ) => {
        return new Promise((resolve, reject) => {
          jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
            if (err) reject(err);
            resolve(token);
          });
        });
      } */
       
      res.status(201).json({ 
        message: "POST - Register",
        email, 
        password,
        userFound: { 
          email, 
          password
         },
        isMatch
      });


      
    }

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Post 
const verifyToken = async (req, res, next) => {
  try {
    res.status(200).json({ message: "POST - VERIFY TOKEN" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// PUT
const logout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "LOGOUT" });
  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// Export
export const methods = { 
    register,   //Post
    login,      //Post
    verifyToken,// Get
    logout      
}