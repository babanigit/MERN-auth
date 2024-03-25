import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

const app = express();



mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/api/user', userRoutes);
  app.use('/api/auth', authRoutes);


  
  app.get("/", (req, res, next) => {
    try {
      res.status(200).json({
        message: " api is live ",
        creator: "Aniket panchal (me)"
      });
    } catch (error) {
      next(error);
    }
  });

app.listen(3000, (req,res,next) => {
    console.log('Server listening on port 3000');
  });