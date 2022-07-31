const express = require('express')
const router = express.Router()
let TODOS = [];

router.get('/', function(req,res){
    const todos = [...TODOS]
    res.json({data: todos})
})
router.post('/', function(req,res){
    const {title} = req.body
    TODOS.push(title)
    res.json({message: 'Task added'})
})
router.put('/:id', function(req,res){
    const {id} = req.params
    TODOS[id-1] = req.body.title
    res.json({message: 'updated'})
})
router.delete('/:id', function(req,res){
    const {id} = req.params
    TODOS = TODOS.filter((todo, index) => index != id - 1)
    res.json({message: 'Todos deleted'})
})

module.exports = router