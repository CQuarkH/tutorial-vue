// to exec, do `node src/server/main.js`

import express from 'express';
import cors from 'cors';

const app = express();

const SERVER_PORT = 3000;

let tasks = [
    { id: 1, name: 'Tarea 1', done: false },
    { id: 2, name: 'Tarea 2', done: true },
    { id: 3, name: 'Tarea 3', done: false },
    { id: 4, name: 'Tarea 4', done: true }
]

// cors middleware
app.use(cors('http://localhost:5173'));
app.use(express.json());


app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hola desde el servidor!' });
});

// GET /tasks
app.get("/api/tareas", (req, res) => {
    res.json(tasks);
});

app.put("/api/tareas", (req, res) => {
    console.log(req.body);
    const { id, done } = req.body;
    tasks[id].done = done;
    console.log(`Tarea con id: ${id} actualizada: ${done}`);
    res.json(tasks.find(t => t.id === id));
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});