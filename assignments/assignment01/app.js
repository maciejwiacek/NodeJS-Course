const express = require('express')

const app = express()

app.use('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res) => {
    res.send('<h1>Hello User!</h1>')
})

app.use('/', (req, res) => {
    res.send('<h1>Welcome on main page!</h1>')
})

app.listen(3000)
