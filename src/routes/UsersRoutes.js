/*
*
* Users Router
*
*/

import { Router } from "express"; 
// Import methods
import { methods as getUsersController } from "../controllers/UsersControllers.js";

const router = Router();

//Routes

//http://localhost:4000/api/app     (GET)
router.get("/", getUsersController.getUsers);

//http://localhost:4000/api/app/1   (GET-ID)
router.get("/:id", getUsersController.getUserId);

//http://localhost:4000/api/app/    (POST)
router.post("/", getUsersController.addUsers);

//http://localhost:4000/api/app/1   (DELETE)
router.delete("/:id", getUsersController.deleteUser);

//http://localhost:4000/api/app/1 (UPDATE)
router.put("/:id", getUsersController.updateUser);

export default router;


