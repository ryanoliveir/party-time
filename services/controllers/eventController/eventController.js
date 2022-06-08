const router  = require('express').Router()
const express = require('express')

router.use(express.urlencoded({ extended: true}))


const event = require('./event')


router.post('/register', async (req, res) => {
    const { name, datetime, description, peopleNumber } = req.body
    console.log(datetime)
    
    await event.register(name ,datetime, description, peopleNumber)

    res.status(200).end()

})

router.get('/list', async (req, res) => {
    
    const events = await event.getAll()

    res.json(events)
})


router.delete('/remove', async (req, res) => {
    const { name } = req.body

    let message = await event.remove(name)
    
    res.json({"message": message})

})

router.put('/update', async (req, res) => {
    const { name, datetime, description, peopleNumber } = req.body

    await event.update(name, datetime, description, peopleNumber)

    res.status(200).end()
})

module.exports = router