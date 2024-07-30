import TodoModel from "../models/todo.model.js";

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        console.log('Error in getAllTodos', error);
        res.status(400).json({ message: 'Internal server error' });
    }
}

const addTodo = async (req, res) => {
    const { data, completed } = req.body;

    if (!data) {
        return res.status(400).json({ message: 'Missing data' });
    }

    if (completed) {
        if (completed.trim() !== 'true' && completed.trim() !== 'false') {
            return res.status(400).json({ message: 'isCompleted should be a lowercase boolean' });
        }
    }

    try {
        const newTodo = await TodoModel.create({ data, completed });
        if (!newTodo) {
            throw new Error('Error saving the todo');
        }
        res.status(201).json(newTodo);
    } catch (error) {
        console.log('Error in addTodo', error);
        res.status(400).json({ message: 'Internal server error' });
    }
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { data, completed } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'Missing id' });
    }
    if (!data && !completed) {
        return res.status(400).json({ message: 'Missing both data and isCompleted, atleast 1 needed' });
    }

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, { data: data, completed: completed }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        console.log('Error in updateTodo', error);
        res.status(400).json({ message: 'Internal server error' });

    }
}

const deleteATodo = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Missing id' });
    }

    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.log('Error in deleteATodo', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteAllTodos = async (req, res) => {
    try {
        await TodoModel.deleteMany();
        res.json({ message: 'All todos deleted' });
    } catch (error) {
        console.log('Error in deleteAllTodos', error);
        res.status(400).json({ message: 'Internal server error' });
    }
}

const markAllCompleted = async (req, res) => {
    try {
        await TodoModel.updateMany({}, { completed: true });
        res.json({ message: 'All todos marked as completed' });
    } catch (error) {
        console.log('Error in markAllCompleted', error);
        res.status(400).json({ message: 'Internal server error' });
    }
}

export { getAllTodos, addTodo, updateTodo, deleteATodo, deleteAllTodos, markAllCompleted };