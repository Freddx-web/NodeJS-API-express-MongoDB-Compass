/*
*
* Users Controllers
*
*/

// import
import bcrypt from "bcryptjs";
import Task from "../model/Schema.Tasks.js"

// GET
const getTask = async (req, res, next) => {  
  try {
    
    res.status(200).json({ message: "GET - TASK" });

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// GET Id
const getTaskId = async (req, res, next) => {
  try {
    res.status(200).json({ message: "GET (ID) - TASK" });
  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// POST 
const addTask = async (req, res, next) => {
  try {
    res.status(200).json({ message: "POST - TASK" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// PUT
const updateTask = async (req, res, next) => {
  try {
    
    res.status(200).json({ message: "PUT (ID) - TASK" });
  

  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// DELETE
const  deleteTask = async (req, res, next) => {
  try {

    res.status(200).json({ message: "DELETE - TASK" });

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Export
export const methods = { 
  getTask, 
  getTaskId, 
  addTask, 
  deleteTask,
  updateTask
}