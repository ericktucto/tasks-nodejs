require('dotenv').config()

const express = require('express');
const app = express()
const path = require('path')
const morgan = require('morgan')

var users = [
    { id: 1, name: "Erick", email: "erick.tucto@outlook.com" },
    { id: 2, name: "Stix", email: "stix.code@outlook.com" },
]

app.use(morgan('dev'))

app.use(require('./routes/task'))

app.use(function (req, res, next) {
    console.log("Hola soy tu middleware")
    next()
})

app.get('/', (req, res) => { res.send('Esta es mi respuesta') })

app.get('/admin/:op?', (req, res, next) => {
    if (req.params.name) {
        next()
    } else {
        res.send('No existe el admin')
    }
})

app.get('/admin/:name(erick|stix)', (req, res) => {
    res.send(req.params.name)
})

app.all('/users/:id/:op?', (req, res, next) => {
    var { id } = req.params
    req.user = users.find( user => user.id === parseInt(id))
    if (req.user) {
        next()
    } else {
        let err = new Error(`No existe el usuario con id ${id}`)
        err.status = 404
        next(err)
    }
})

app.get('/users/:id', (req, res) => {
    var { user } = req
    res.send(`Hola, soy ${user.name}, y mi correo es ${user.email}`)
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log(`Applicacion corriendo en http://localhost:3000`))
