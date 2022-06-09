const database = require('../../database/db')
const EventList = require('../../database/models/Event-List/event-list')

const register = async (name, datetime, description, peopleNumber) => {

    if(peopleNumber == 0 || peopleNumber == undefined){
        let message = "An event must have at least one person!"
        return message
    }

    const date = new Date(datetime)
    
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const date_event = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
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

        let message = "Event created!"
        return message


    }catch (err) {
        let message ="Something went wrong!" + err
        return message
    }
}

const getAll = async () => {

    return await EventList.findAll()
}


const remove = async (name) => {

    const event = await EventList.findOne({where: {name_event: name}})

    if(!event){
        let message = "Event not found!"
        return message
    }
    
    await EventList.destroy({where: {id_event: event.id_event}})

    let message = "Event has been remove"
    return message
}


const update = async (name, datetime, description, peopleNumber) => {
    

    if(peopleNumber == 0){
        let message = "An event must have at least one person!"
        return message
    }

    const requestData = []

    const date = new Date(datetime)
    
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const date_event = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()


    const event = await EventList.findOne({where: {name_event: name}})

    requestData.push(name, date_event, time, description, peopleNumber)


    for(let index in requestData){
        if (requestData[index] == undefined) {
            continue

        }else{
            switch(index){

                case '0':
                    event.name_event = requestData[index]
                    event.save()
                    break

                case '1':
                    event.date_event = requestData[index]
                    event.save()
                    break

                case '2':
                    event.time_event = requestData[index]
                    event.save()
                    break

                case '3':
                    event.event_description = requestData[index]
                    event.save()
                    break

                case '4':
                    event.people = requestData[index]
                    event.save()
                    break

                default:
                    break
            }
        }

    }

    let message = "Event updated!"
    return message
    
    
    
    
}

module.exports = {
    register,
    getAll,
    remove,
    update,
}