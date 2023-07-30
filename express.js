import express from "express";
import cors from "cors";

import postRouter from "./routes/post.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/posts", postRouter);

app.get("/", (req, res) => {
	res.send("Welcome to devX server");
});

export default app;
