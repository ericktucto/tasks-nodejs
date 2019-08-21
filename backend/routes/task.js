const express = require('express')
const router = express.Router()
const Task = require('./../models/task')

router.route('/tasks')
    .get((req, res) => {
        res.send("Hola Erick, somos tus tareas")
    })
router.route('/tasks/:id')
    .get((req, res) => {
        let task
        Task.findAll({ where: { id: 1 } })
            .then(users => {
                res.send(users)
            })
    })

// router.get('/tasks', (req, res) => {
//     res.send("Hola Erick, somos tus tareas")
// })

// router.get('/tasks/:id', (req, res) => {
//     res.send(req.params.id)
// })


module.exports = router