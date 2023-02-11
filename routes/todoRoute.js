const router = require('express').Router();

const { getTodos, saveTodo, deleteTodo, updateTodo } = require('../controller/todoController');

router.get('/', getTodos);
router.post('/', saveTodo);
router.delete('/',deleteTodo);
router.put('/',updateTodo);

module.exports = router;