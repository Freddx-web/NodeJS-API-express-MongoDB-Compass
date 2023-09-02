/*
*
* Users Router
*
*/

import { Router } from "express"; 
// Import methods
import { methods as getTaskController } from "../controllers/TasksControllers.js";

const router = Router();

//Routes

//http://localhost:4000/api/app     (GET)
router.get("/", getTaskController.getTask);

//http://localhost:4000/api/app/1   (GET-ID)
router.get("/:id", getTaskController.getTaskId);

//http://localhost:4000/api/app/    (POST)
router.post("/", getTaskController.addTask);

//http://localhost:4000/api/app/1 (UPDATE)
router.put("/:id", getTaskController.updateTask);

//http://localhost:4000/api/app/1   (DELETE)
router.delete("/:id", getTaskController.deleteTask);


export default router;


