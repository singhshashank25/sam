import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use("/api/v1/auth", authRoutes);



app.get("/", (req, res) => {
    res.send("<h1>Hello </h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});