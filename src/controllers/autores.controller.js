const db = require("../config/db");

// Obtener todos los autores
exports.getAutores = (req, res) => {
  db.query("SELECT * FROM autores", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Crear un nuevo autor
exports.createAutor = (req, res) => {
  const { nombre, email, imagen } = req.body;
  db.query(
    "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
    [nombre, email, imagen],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: results.insertId, nombre, email, imagen });
    }
  );
};
