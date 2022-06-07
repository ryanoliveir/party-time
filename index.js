const express = require('express');
const req = require('express/lib/request');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//database
const database = require('./services/database/connection-db')

app.get('/database', database.connectionCheck)

//person and event routes

const personController = require('./services/controllers/personController/personController')
app.use("/person", personController)




app.listen(80, () => {
    console.log("[+] Listening on http://localhost/\n")
})