const axios = require('axios');

const url = 'http://127.0.0.1:3000';

describe('Todos', () => {
    test('get all todo', async () => {
        const res = await axios.get(`${url}/api/v1/todos`)
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })
    test('get todo by id', async () => {
        const res = await axios.get(`${url}/api/v1/todos/1`)
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })
    test('store todo', async () => {
        const res = await axios.post(`${url}/api/v1/todos/`, {name: 'Todo Unit Test'})
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })
    test('update todo', async () => {
        const res = await axios.put(`${url}/api/v1/todos/1`, {name: 'Todo Unit Test Update'})
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })
    test('destroy todo', async () => {
        const res = await axios.delete(`${url}/api/v1/todos/1`)
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })
})