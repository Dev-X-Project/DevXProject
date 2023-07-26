import Post from "../models/post.js";

export async function createBlogPost(req, res) {
	const { post } = req.body;
	const result = new Post(post);
	try {
		await result.save();
		res.status(200).json(result);
	} catch(e) {
		res.status(500).json(e);
	}
}