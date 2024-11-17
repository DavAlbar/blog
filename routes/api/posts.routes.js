const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/posts.controller");

// Obtener todos los posts
router.get("/", postsController.getPosts);

// Crear un nuevo post
router.post("/", postsController.createPost);

module.exports = router;
