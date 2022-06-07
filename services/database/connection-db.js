const res = require('express/lib/response');
const database = require('./db')
const People = require('./models/People/people')
const EventList = require('./models/Event-List/event-list')

const connectionCheck =  async (req, res) => {

    try {
        await database.authenticate();
        await database.sync();
        res.json({"message": "Connection sucessfull!"})
    }
    catch (err) {
        res.json({"message": "Connection failure!" + err.message})
    }
}


module.exports = {
    connectionCheck
}