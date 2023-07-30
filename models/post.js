import { Schema, model } from "mongoose";

const PostSchema = new Schema({
	title: { type: String, required: "Title is required. Please add one." },
	description: String,
	content: { type: String },
	likes: { type: Number, default: 0 },
	thumbnail: String,
	shares: { type: Number, default: 0 },
});

const Post = model("Blog", PostSchema);

export default Post;
