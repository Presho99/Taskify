const express = require('express')
const Task = require('../models/taskModel')
const router = express.Router()


// GET all tasks
router.get('/', (req, res) => {
    res.json({message: "GET all tasks"})
})

// GET a single task
router.get('/:id', (req, res) => {
    res.json({message: "GET a single task"})
})

// POST a new task
router.post('/', async (req, res) => {
    const {creator, title, description, priority, status, dueDate} = req.body

    try{
        const task = await Task.create({creator, title, description, priority, status, dueDate})
        res.status(200).json(task)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
   
})

// UPDATE a task
router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE a task"})
})

// DELETE a task
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE a task"})
})

module.exports = router