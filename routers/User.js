const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const CTS = process.env.CTS
const CTE = process.env.CTE

// REGISTER
router.post('/user/register', async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.generateAuthToken()
        res.cookie('Authorization', `${CTS}${token}${CTE}`)
        res.send({error: false}).status(200)
    }catch(e){
        console.log(e)
        res.send({error: true, message: e})
    }
})

// LOGOUT
router.get('/user/logout', auth, async (req, res) => {
    await req.user.destroyTokens()
    res.status(200).send(true)
})

// LOGIN
router.post('/user/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body)
        const token = await user.generateAuthToken()
        res.cookie('Authorization', `${CTS}${token}${CTE}`)
        res.send({error: false}).status(200)
    }catch(e){
        console.log(e)
        res.send({error: true, message: e})
    }
})

module.exports = router