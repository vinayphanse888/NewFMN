import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import authRoutes from "./Routes/auth.js";
import noteRoutes from "./Routes/notes.js";

const app = express();
const PORT = 6969;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("\u2705 MongoDB Connected Successfully");
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("Server Is Running");
});


app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/files", express.static("files"));

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})