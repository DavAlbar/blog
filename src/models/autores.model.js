const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'blog_db'
});

// Función para obtener todos los autores
const getAllAutores = (callback) => {
    db.query('SELECT * FROM autores', (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

// Función para obtener un autor por ID
const getAutorById = (id, callback) => {
    db.query('SELECT * FROM autores WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

// Función para crear un nuevo autor
const createAutor = (autor, callback) => {
    db.query('INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)', 
    [autor.nombre, autor.email, autor.imagen], (err, results) => {
        if (err) return callback(err);
        callback(null, { id: results.insertId, ...autor });
    });
};

// Función para actualizar un autor
const updateAutor = (id, autor, callback) => {
    db.query('UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?', 
    [autor.nombre, autor.email, autor.imagen, id], (err, results) => {
        if (err) return callback(err);
        callback(null, { id, ...autor });
    });
};

// Función para eliminar un autor
const deleteAutor = (id, callback) => {
    db.query('DELETE FROM autores WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results.affectedRows > 0);
    });
};

module.exports = {
    getAllAutores,
    getAutorById,
    createAutor,
    updateAutor,
    deleteAutor
};
