const express = require('express')
const router = express.Router()

//login/landing page
//get request to /
router.get('/', (req, res)=>{
    res.render('login')
})

//dashboard
//get request to dashboard
router.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})

module.exports = router