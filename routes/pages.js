const express = require('express')
const router  = require('express').Router()
const path = process.cwd()


router.use(express.urlencoded({ extended: true }))

router.get('/person-register', (req, res) => {
    res.sendFile(path + '/public/pages/person_register_page/index.html')
}) 

router.get('/event-register', (req, res) => {
    res.sendFile(path + '/public/pages/events_register_page/index.html')
})


module.exports = router 