const express = require('express');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

//database
const database = require('./services/database/connection-db')

app.get('/database', database.connectionCheck)

//person and event routes

const personController = require('./services/controllers/personController/personController')
app.use("/person", personController)


const eventController = require('./services/controllers/eventController/eventController')
app.use("/event", eventController)

const partipationController = require('./services/controllers/participationController/participationController')
app.use("/participation", partipationController)
// pages

const home = require('./routes/pages')
app.use("/home", home)





app.listen(80, () => {
    console.log("[+] Listening on http://localhost/\n")
})