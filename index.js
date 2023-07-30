import app from "./express.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const mongoDbURI = process.env.MONGO_URI;

mongoose
	.connect(mongoDbURI)
	.then(() => {
		console.log("Database connected successfully");
	})
	.catch((e) => {
		console.log(e);
	});

app.listen(port, () => {
	console.log("Server is running");
});
