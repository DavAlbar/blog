// models/posts.model.js
const db = require("../db"); 

const Posts = {
  // Obtener todos los posts con datos del autor
  getAll: (callback) => {
    db.query(
      "SELECT posts.*, autores.nombre AS autor_nombre FROM posts JOIN autores ON posts.autor_id = autores.id",
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  // Crear un nuevo post
  create: (titulo, descripcion, categoria, autor_id, callback) => {
    db.query(
      "INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)",
      [titulo, descripcion, categoria, autor_id],
      (err, results) => {
        if (err) return callback(err);
        callback(null, {
          id: results.insertId,
          titulo,
          descripcion,
          categoria,
          autor_id,
        });
      }
    );
  },

  // Obtener posts por autor
  getByAutorId: (autor_id, callback) => {
    db.query(
      "SELECT posts.*, autores.nombre AS autor_nombre FROM posts JOIN autores ON posts.autor_id = autores.id WHERE posts.autor_id = ?",
      [autor_id],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },
};

module.exports = Posts;
