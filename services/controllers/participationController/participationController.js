const router = require('express').Router()
const express = require('express')

router.use(express.urlencoded({ extended: true }))



const partipation = require('./participation')


router.get('/person', async (req, res) => {
    const { email } = req.body

    let events = await partipation.findEvents(email)

    res.json(events)
})

router.get('/event-participants', async (req, res) => {
    const { name } = req.body

    let participants = await partipation.findParticipants(name)

    res.json(participants)
})


module.exports = router