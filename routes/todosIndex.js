var express = require('express');
var router = express.Router();
const todosController = require('../controllers/todosControllers')

router.get('/', todosController.index);
module.exports = router;