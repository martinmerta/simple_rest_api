import {Task} from '../models/Task'
const task = new Task('title','description')

it('should be instacje of object', ()=>{
    expect(task).toBeInstanceOf(Object)
})
it('was called with title and description', ()=>{
expect(task).toBeTruthy()
})