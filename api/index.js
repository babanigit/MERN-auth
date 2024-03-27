import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();


const __dirname = path.dirname(new URL(import.meta.url).pathname);


const app = express();


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});



app.use(express.json());
app.use(cookieParser());



mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

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

  app.use('/api/user', userRoutes);
  app.use('/api/auth', authRoutes);



// error handling
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });

app.listen(3000, (req,res,next) => {
    console.log('Server listening on port 3000');
  });


