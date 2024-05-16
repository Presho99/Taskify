const express = require('express')
const {getTasks, getTask, createTask} = require('../controllers/taskController')
const router = express.Router()


// GET all tasks
router.get('/', getTasks)

// GET a single task
router.get('/:id', getTask)

// POST a new task
router.post('/', createTask)

// UPDATE a task
router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE a task"})
})

// DELETE a task
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE a task"})
})

module.exports = router