import express from "express";
import { createBlogPost } from "../controllers/post.js";

const router = express.Router()

router.post("/", createBlogPost)

export default router;