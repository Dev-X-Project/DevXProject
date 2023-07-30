import express from "express";
import {
	createBlogPost,
	readAllPosts,
	likePost,
	readPost,
} from "../controllers/post.js";

const router = express.Router();

router.post("/", createBlogPost);
router.get("/", readAllPosts);
router.get("/:id", readPost);
router.patch("/:id/like", likePost);

export default router;
