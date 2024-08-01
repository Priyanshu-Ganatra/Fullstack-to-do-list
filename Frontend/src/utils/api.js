const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const addTodo = async (text) => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const deleteAllTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const deleteTodo = async (_id) => {
    const response = await fetch(`${BASE_URL}/todos/${_id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const getTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'GET',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const markAllTodos = async () => {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'PATCH',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const toggleTodo = async (_id) => {
    const response = await fetch(`${BASE_URL}/todos/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ toggle: true }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const updateTodo = async (_id, text) => {
    const response = await fetch(`${BASE_URL}/todos/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: text }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};