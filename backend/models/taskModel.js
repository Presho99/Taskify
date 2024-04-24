const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({ 
    creator: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'low'
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    collaborators: [{
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    }],
    dueDate: {
        type: Date,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model("Tasks", taskSchema)