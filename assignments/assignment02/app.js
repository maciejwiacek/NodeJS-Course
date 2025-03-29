const path = require('path')

const express = require('express')

const app = express()

const rootDir = require('./utils/rootDir')
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')

app.use(express.static(path.join(rootDir, 'public')))
app.use(homeRoute)
app.use(userRoute)

app.listen(3000)
