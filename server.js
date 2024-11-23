const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

// Configuración de la base de datos SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error('Error al conectar con la base de datos:', err);
    else console.log('Conexión exitosa a SQLite');
});

// Crear tabla de tareas si no existe
db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT
)`);

// Endpoint para obtener todas las tareas
app.get('/tasks', (req, res) => {
    db.all('SELECT * FROM tasks', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

// Endpoint para agregar una nueva tarea
app.post('/tasks', (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).send('La tarea no puede estar vacía.');

    db.run('INSERT INTO tasks (task) VALUES (?)', [task], function (err) {
        if (err) return res.status(500).send(err.message);
        res.json({ id: this.lastID, task });
    });
});

// Endpoint para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    db.run('DELETE FROM tasks WHERE id = ?', [id], function (err) {
        if (err) return res.status(500).send(err.message);
        res.json({ message: 'Tarea eliminada con éxito' });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
