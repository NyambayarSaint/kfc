const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/authenticate', auth, async (req, res) => {
    res.status(200).send(req.type)
})

module.exports = router