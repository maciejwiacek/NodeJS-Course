const express = require('express')

const router = express()

const users = []

router.post('/add-user', (req, res) => {
	users.push(req.body.username)
	res.redirect('/')
})

exports.router = router
exports.users = users
