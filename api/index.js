import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"
import { fileURLToPath } from "url";
import { verifyToken } from "./utils/verifyUser.js";

dotenv.config();
const app = express();

// const __filename= fileURLToPath(import.meta.url)
// const __dirname= path.dirname(__filename)
// console.log(__dirname)

const __dirname = path.resolve();

// app.use(express.static(path.join(__dirname, '/client2/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client2', 'dist', 'index.html'));
// });

app.use(express.json());
app.use(cookieParser());



const corsOptions = {
  origin: "https://mern-auth-nu.vercel.app", // frontend URI (ReactJS)
  credentials: true // Allows session cookies to be sent from frontend to backend 
}

app.use(cors(
  corsOptions
  ));

// // Configure CORS to allow requests from your frontend domain
// app.use(cors({
//   origin: 'http://localhost:3000/', // Replace with your frontend URL
//   credentials: true // Allows session cookies to be sent from frontend to backend
// }));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);



// // use the client2 app
// app.use(express.static(path.join(__dirname, "/client2/dist")));

// console.log(__dirname);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client2/dist/index.html"));
// });



// connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      message: " api is live ",
      creator: "Aniket panchal (me)",
    });
  } catch (error) {
    next(error);
  }
});

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, (req, res, next) => {
  console.log("Server listening on port 3000");
});
