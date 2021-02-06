'use strict'

const Todo = require('../models/index')

exports.index = (req, res, next) => {
    Todo.find()
            .sort({ 'name': 'asc' })
            .then(todoList => {
                res.render('todosIndex', {todoList: todoList})
            })
            .catch(error => {
                console.log(`Error fetching todos: ${error.message}`)
                next(error)
            })
}


exports.create = (req, res, next) => {
    const todoParams = getParams(req.body)
    const newTodo = new Todo(todoParams)
    newTodo.save()
        .then(result => {
            res.render('todosIndex', {todoList: result})
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

exports.update = (req, res, next) => {
    const todoId = req.params.id
    const todoParams = getParams(req.body)

    Todo.findOneAndUpdate({ _id: todoId }, todoParams,{new: true})
        .then(result => {
            res.render('todosIndex', {todoList: result})
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

exports.delete = (req, res, next) => {
    const todoId = req.params.id
    Todo.findByIdAndRemove(todoId)
        .then(() => {
            next();
        })
        .catch(error => {
            if (error) res.send(error)
        })
}


exports.apiDone = (req, res, next) => {
    const todoId = req.params.id
    Todo.findOneAndUpdate({ _id: todoId }, {done: true},{new: true})
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

exports.apiReset = (req, res, next) => {
    const todoId = req.params.id
    Todo.findOneAndUpdate({ _id: todoId }, {done: false},{new: true})
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            if (error) res.send(error)
        })
}