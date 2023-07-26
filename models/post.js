import { Schema, model } from "mongoose";

const PostSchema = new Schema({
	title: {type: String, required: "Title is required. Please add one."},
	description: String,
	content: {type: String, required: "A blog needs a content. Please add one"},
	likes: {type: Number, default: 0},
	thumbnail: String,
	shares: Number
});

const Post = model("Blog", PostSchema);

export default Post;