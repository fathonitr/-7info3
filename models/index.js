const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({
        name: String,
        done: Boolean
})
module.exports = mongoose.model('Todo', todoSchema)
/* const todoList =[
    {
        id: 0,
        name: 'Breakfeast',
        done: false
    },
    {
        id: 1,
        name: 'Wake Up',
        done: true
    },
    {
        id: 2,
        name: 'Sleep Again',
        done: false
    }
] */