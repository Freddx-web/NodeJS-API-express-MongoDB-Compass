/*
*
* Users Controllers
*
*/

// import
import bcrypt from "bcryptjs";
import User from "../model/Schema.js"

// Get
const getUsers = async (req, res, next) => {  
  try {
    
    res.status(200).json({ message: "GET - USERS" });

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Get Id
const getUserId = async (req, res, next) => {
  try {
    res.status(200).json({ message: "GET (ID) - USERS" });
  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// Post 
const addUsers = async (req, res, next) => {
  try {
    res.status(200).json({ message: "POST - USERS" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// PUT
const updateUser = async (req, res, next) => {
  try {
    
    res.status(200).json({ message: "PUT (ID) - USERS" });
  

  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// DELETE
const  deleteUser = async (req, res, next) => {
  try {

    res.status(200).json({ message: "DELETE - USERS" });

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Export
export const methods = { 
  getUsers, 
  getUserId, 
  addUsers, 
  deleteUser,
  updateUser
}