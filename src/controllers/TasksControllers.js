/*
*
* Tasks Controllers
*
*/

// import
import bcrypt from "bcryptjs";
import { MongoClient } from 'mongodb';
const URL = "mongodb://localhost:27017/"
import Task from "../model/Schema.Tasks.js"

// GET
const getTask = async (req, res, next) => {  
  try {
    // Get Id User
    const { id } = req.body;

    //Validation
    if ( id === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 

    // Found User Emailb
    
    const tasksFound = await Task.findOne({ id });
    
    if(tasksFound){

      return res.status(202).json({
        message: ["Id Encontrado"],
        tasksFound 
      });

    } else {
      res.status(404).json({ message: "ID NO ENCONTRADO" });
    } 

  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// GET Id
const getTaskId = async (req, res, next) => {
  try {
    
    const { id } = req.body;

    //Validation
    if ( id === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 

    // Found User Emailb
    
    const tasksFound = await Task.findOne({ id });
    
    if(tasksFound){

      return res.status(202).json({
        message: ["Id Encontrado"],
        tasksFound
      });

    } else {
      res.status(404).json({ message: "ID NO ENCONTRADO" });
    } 
    
  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// POST 
const addTask = async (req, res, next) => {
  try {

    const { title, description } = req.body;
    //Validation
    if (title === undefined || description === undefined ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." }); 
    } 

    // Found User Email
    const titleFound = await Task.findOne({ title });

    if (titleFound) {
      return res.status(400).json({
        message: ["The Title is already in use"],
      });

    } else {

      // creating the Task
      const newTask = new Task({
        title, description
      });

      // saving the user in the database
      const takasSaved = await newTask.save();

      res.status(200).json({ takasSaved });

    }

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