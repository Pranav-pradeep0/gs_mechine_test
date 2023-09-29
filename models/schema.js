const mongoose = require('mongoose')

const tasks = mongoose.model('task', {
    taskDesc : {
        type : String
    },
    completed : {
        type: String, enum: ['true', 'false'],
        default: 'false'
    }
})

module.exports = tasks