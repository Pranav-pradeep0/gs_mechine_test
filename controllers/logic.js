const tasks = require("../models/schema")

exports.alltasks = async (req,res) => {

        const tasksList = await tasks.find()

        if (tasksList.length > 0) {
            res.status(200).json(tasksList)    
        } 

        else {
            res.status(404).json('No Tasks Found')
        }

}

exports.newTasks = async (req,res) => {

    const {task, completed} = req.body

        const newTask = new tasks ({
            taskDesc : task,
            completed
        })

        await newTask.save()
        res.status(200).json(newTask)

}

exports.updateTask = async (req,res) => {

    const update = await tasks.findByIdAndUpdate(
        _id = req.params.id,
        req.body,
        {new: true}
    )

    res.status(200).json(update);

}

exports.deleteTask = async (req,res) => {

    const id = req.params.id

    const deleteTask = await tasks.findByIdAndDelete({_id:id})

    res.status(200).json(deleteTask)

}