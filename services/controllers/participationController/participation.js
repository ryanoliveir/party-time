const database = require('../../database/db')
const EventList = require('../../database/models/Event-List/event-list')
const People = require('../../database/models/People/people')


const findEvents = async (email) => {

    const person = await People.findOne({where: {email:email}})

    if(!person){
        let message = "User not found!"
        console.log(message)
        return
    }

    let choices = []
    choices = person.event_choice.replace("[","").replace("]","").split(",");


    //console.log(choices)

    let events = []

    for(let index in choices){
        //console.log(index)
        const event = await EventList.findByPk(choices[index])

        if(!event){
            console.log("Event not found!")
            return
        }

        events.push(event)
        
    }


    return events



}


const findParticipants = async (name) => {
    console.log("findParticipants")

    let participants = []
    const event = await EventList.findOne({where: {name_event: name}})

    if(!event){
        console.log("Event not found!")
        return
    }

    
    let numberOfPeople = await People.count()
    console.log(numberOfPeople)

    for(let i = 0; i < numberOfPeople; i++){
        
        const person = await People.findAll()
        let person_choice = []
        person_choice = person[i].event_choice.replace("[","").replace("]","").split(",");
        
        for (let j = 0; j < person_choice.length; j++){
            //console.log(person_choice[j])

            if(person_choice[j] == event.id_event){
                console.log(person[i].name_person)

                let participant = await People.findOne({where: {name_person: person[i].name_person}})
                console.log(participant)

                participants.push(participant) 
            }
        }
        //console.log(person_choice)
        //const participant = await People.findOne({ where: {event_choice: event.id_event}})

        //if(!participant){
        //    continue
        //}
//
        //participants.push(participant)
    }

    return participants

    //console.log(participants)



}


module.exports = {
    findEvents,
    findParticipants
}