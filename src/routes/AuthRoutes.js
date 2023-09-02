/*
*
* Auth Router
*
*/

import { Router } from "express"; 
// Import methods
import { methods as getAuthController } from "../controllers/AuthControllers.js";

const router = Router();

//Routes http://localhost:4000/api/auth 

// (POST)
router.post("/register", getAuthController.register);
//router.post("/login", login);
//router.get("/verify", verifyToken);
//router.post("/logout", verifyToken, logout);

export default router;


