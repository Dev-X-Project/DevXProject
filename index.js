import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import postRouter from "./routes/post.js";
dotenv.config(); 

const port = process.env.PORT;
const mongoDbURI = process.env.MONGO_URI;

const app = express();


mongoose.connect(mongoDbURI).then(() => {
	console.log("Database connected successfully");
}).catch((e) => {
	console.log(e);
});



app.use(cors());

app.use(express.json())



app.use("/posts", postRouter);



app.get("/", (req, res) => {
	res.send("Welcome to devX server");
});

app.listen(port, () => {
	console.log("Server is running");
});





