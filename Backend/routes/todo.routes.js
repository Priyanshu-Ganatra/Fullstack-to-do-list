import express from 'express';
import {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteATodo,
    deleteAllTodos,
    markAllCompleted
} from '../controllers/todo.controller.js';
const router = express.Router();

// get all todos
router.get('/todos', getAllTodos);

// add a todo
router.post('/todos', addTodo);

// update a todo
router.put('/todos/:id', updateTodo);

// delete a todo
router.delete('/todos/:id', deleteATodo);

// delete all todo
router.delete('/todos', deleteAllTodos);

// mark all as completed
router.patch('/todos', markAllCompleted);

export default router;