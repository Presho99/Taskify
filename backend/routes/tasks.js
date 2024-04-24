const express = require('express')
const router = express.Router()


// GET all tasks
router.get('/', (req, res) => {
    res.json({message: "GET all tasks"})
})

// GET a single task
router.get('/:id', (req, res) => {
    res.json({message: "GET a single task"})
})

// POST a task
router.post('/', (req, res) => {
    res.json({message: "POST a new task"})
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