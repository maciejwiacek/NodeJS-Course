const path = require('path');

const express = require('express')

const rootDir = require('../utils/rootDir')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = router
