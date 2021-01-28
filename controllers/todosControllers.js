'use strict'

const todoList = require('../models/index')

exports.index = (req, res, next) => {
    res.render('todosIndex', {todoList: todoList})
}

