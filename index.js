const express = require('express');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//database
const database = require('./services/database/connection-db')

app.get('/database', database.connectionCheck)

//person and event routes

const personController = require('./services/controllers/personController/personController')
app.use("/person", personController)


const eventController = require('./services/controllers/eventController/eventController')
app.use("/event", eventController)




app.listen(80, () => {
    console.log("[+] Listening on http://localhost/\n")
})