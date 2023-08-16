const User = require('../model/Schema.js');

exports.readUser = async (req, res) => {
    try {
      const user = await User.find();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };