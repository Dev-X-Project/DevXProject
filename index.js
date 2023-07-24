import express from "express";
import cors from "cors";
const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to devX server")
});

app.listen(5000, () => {
    console.log("Server is running");
});