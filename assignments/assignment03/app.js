const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.urlencoded())

const usersRouter = require('./routes/users')
const homeRouter = require('./routes/home')
const usersData = require('./routes/usersData')

app.set('view engine', 'ejs')

app.use(usersRouter)
app.use(homeRouter)
app.use(usersData.router)

app.use('/', (req, res) => {
	res.status(404).render('404', {
		pageTitle: 'Not Found',
	})
})

app.listen(3000)
