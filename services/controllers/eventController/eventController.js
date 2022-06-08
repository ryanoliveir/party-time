const router  = require('express').Router()
const express = require('express')

router.use(express.urlencoded({ extended: true}))


const event = require('./event')


router.post('/register', async (req, res) => {
    const { name, datetime, description, peopleNumber } = req.body
    console.log(datetime)
    
    event.register(name ,datetime, description, peopleNumber)

    res.status(200).end()

})

module.exports = router