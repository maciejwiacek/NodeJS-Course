const express = require('express')

const router = express.Router()

const usersData = require('./usersData')

router.get('/users', (req, res) => {
	const users = usersData.users
	res.render('users', {
		pageTitle: 'Users',
		users: users,
	})
})

module.exports = router
