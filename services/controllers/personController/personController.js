const router = require('express').Router()
const express = require('express')


router.use(express.urlencoded({ extended: true }),)


const person = require('./person')


router.post('/register', async (req, res) => {
   const { name, emailAdress, birth_date, event_choice = null } = req.body

   person.register(name, emailAdress, birth_date, event_choice)

   res.status(200).end()

})


router.get('/list', async (req, res) => {

   const people =  await person.getAll()
   res.json(people)
   
}


)

module.exports = router
