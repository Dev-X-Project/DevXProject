import Post from "../models/post.js";

export async function createBlogPost(req, res) {
	const result = new Post(req.body);
	try {
		await result.save();
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

export async function readAllPosts(req, res) {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

export async function likePost(req, res) {
	const { id } = req.params;
	console.log(id);
	try {
		const post = await Post.findById(id);
		console.log(post.save);
		post.likes = post.likes + 1;
		await post.save();
		res.status(200).json(post);
	} catch (e) {
		console.log(e.message);
		res.status(500).json(e);
	}
}

export async function readPost(req, res) {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);
		res.status(200).json(post);
	} catch (e) {
		console.log(e.message);
		res.status(500).json(e);
	}
}
