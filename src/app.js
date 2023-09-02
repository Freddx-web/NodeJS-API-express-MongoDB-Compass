/**
 * App 
 */

import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Extentions
import { FRONTEND_URL } from "./config.js";
import AuthRouter from "./routes/AuthRoutes.js";
import TasksRoutes from "./routes/TasksRoutes.js";

// Settings
const app = express();
app.use(cors());
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", AuthRouter);
app.use("/api/tasks/", TasksRoutes);

// 404
app.use(function(req, res, next) {
  next(createError(404));
  return res.status(400).json({
    message: ["404. Page not Found."],
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export App 
export default app;


