const User = require('../model/Schema.js');

// Register
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Seach Found Email
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });
    
    //hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

  } catch (error) {
    res.status(500).send(error);
  }
}

//
exports.readUser = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).send(error);
  }
};