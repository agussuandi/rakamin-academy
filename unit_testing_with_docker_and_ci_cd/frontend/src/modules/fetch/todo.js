import { instance } from '../axios/index'

async function getAllTodos() {
    try {
        const response = await instance.get('/api/v1/todos')
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong')
    }
}

async function storeTodo(name) {
    try {
        const response = await instance.post(`/api/v1/todos`, { name })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong')
    }
}

async function updateTodo(id, name) {
    try {
        const response = await instance.put(`/api/v1/todos/${id}`, { name })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong')
    }
}

async function showTodo(id) {
    try {
        const response = await instance.get(`/api/v1/todos/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong')
    }
}

async function destroyTodo(id) {
    try {
        const response = await instance.delete(`/api/v1/todos/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong')
    }
}

export { getAllTodos, storeTodo, showTodo, updateTodo, destroyTodo }