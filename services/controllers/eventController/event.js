const database = require('../../database/db')
const EventList = require('../../database/models/Event-List/event-list')

const register = async (name, datetime, description, peopleNumber) => {

    const date = new Date(datetime)
    
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const date_event = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
    console.log(date_event)
    
    try {
        EventList.create({
            name_event: name,
            date_event: date_event,
            time_event: time,
            event_description: description,
            people: peopleNumber
        })

        await database.sync()

        console.log("[+] Event created!")
    }catch (err) {
        console.error("[!] Something went wrong!" + err)
    }
}



module.exports = {
    register
}