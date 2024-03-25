import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

const app = express();




app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });