import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions={
    origin:'http://127.0.0.1:5173',
    credentials:true
}


mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("failed connect");
        
    }
}


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())
app.use('/api/v1/auth',authRoute )
app.use('/api/v1/tours',tourRoute )
app.use('/api/v1/users',userRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/booking',bookingRoute)


app.listen(port , () => {
    connect();
    console.log(`server is running on port ${port}`);
})