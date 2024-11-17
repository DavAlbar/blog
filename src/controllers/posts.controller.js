const db = require("../config/db");

// Obtener todos los posts
exports.getPosts = (req, res) => {
  db.query(
    "SELECT posts.*, autores.nombre AS autor_nombre FROM posts JOIN autores ON posts.autor_id = autores.id",
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
};

// Crear un nuevo post
exports.createPost = (req, res) => {
  const { titulo, descripcion, categoria, autor_id } = req.body;
  db.query(
    "INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)",
    [titulo, descripcion, categoria, autor_id],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res
        .status(201)
        .json({
          id: results.insertId,
          titulo,
          descripcion,
          categoria,
          autor_id,
        });
    }
  );
};
