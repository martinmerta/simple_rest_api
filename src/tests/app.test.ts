import {app} from '../app';
const request = require('supertest')

it('should pass init test', ()=>{
    expect(1).toBe(1)
})
it('test get /tasks/todo endpoint',async ()=>{
    const response = await request(app).get('/tasks/todo')
    expect(response.statusCode).toEqual(400); 
})
it('return status 422 if error', async ()=>{
    const response = await request(app).post('/tasks/todo');
    expect(response.statusCode).toEqual(422)
})
it('resturn status code 400 if error',async()=>{
    const response = await request(app).delete('/tasks/todo/:id')
    expect(response.statusCode).toEqual(400)
})
