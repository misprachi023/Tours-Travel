import express from "express";
import dotenv from "dotenv";
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.listen(port , () => {
    console.log(`server is running on port ${port}`);
})