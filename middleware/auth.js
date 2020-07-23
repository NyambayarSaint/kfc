const jwt = require('jsonwebtoken')
const User = require('../models/user')
const JWTSECRET = process.env.JWTSECRET

const CTS = process.env.CTS
const CTE = process.env.CTE

const auth = async (req, res, next) => {

    const decodedCookie = decodeURIComponent(req.headers.cookie)
    if(decodedCookie.includes(CTS)){
        try {
            const start = decodedCookie.indexOf(CTS)
            const end = decodedCookie.lastIndexOf(CTE)
            const token = decodedCookie.slice(start+CTS.length, end)
    
            const decoded = jwt.verify(token, JWTSECRET)
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
    
            if (!user) {
                throw new Error('No user found!');
            }
    
            req.token = token
			req.user = user
			req.type = 'Co'
            
            next()
        } catch (e) {
            res.status(401).send('Session expired or not valid account!')
        }
    }
    else throw new Error('None of them!')
}

module.exports = auth