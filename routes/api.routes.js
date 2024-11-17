const router = require("express").Router();

// Rutas para autores
router.use("/autores", require("./api/autores.routes"));

// Rutas para posts
router.use("/posts", require("./api/posts.routes"));

module.exports = router;
