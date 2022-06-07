const router = require('express').Router()
const express = require('express')


router.use(express.urlencoded({ extended: true }),)


const person = require('./person')


router.post('/register', async (req, res) => {
   const { name, emailAddress, birth_date, event_choice = null } = req.body

   person.register(name, emailAddress, birth_date, event_choice)

   res.status(200).end()

})

router.get('/list', async (req, res) => {

   const people =  await person.getAll()
   res.json(people)
   
})

router.delete('/remove', async (req, res) => {
      const { emailAddress } = req.body

      message = await person.remove(emailAddress)

      res.json({"message": message})
})

router.put('/update', async (req, res) => {
   const { name, emailAddress, birth_date, event_choice = null } = req.body

   await person.update(name, emailAddress, birth_date, event_choice)

   res.status(200).end()
})

module.exports = router
