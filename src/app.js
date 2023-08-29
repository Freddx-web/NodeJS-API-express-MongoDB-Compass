import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";

//
import { FRONTEND_URL } from "./config.js";
import AuthRouter from "./routes/UsersRoutes.js";

const app = express();
app.use(cors());
// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", AuthRouter);

// 404
app.use(function(req, res, next) {
  next(createError(404));
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


