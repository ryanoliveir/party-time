const database = require('../../database/db')
const People = require('../../database/models/People/people')


const register = async (name, emailAdress, birth_date, event_choice) => {

    const date = new Date(birth_date)
    const events = JSON.stringify(event_choice[0])
    


    console.log(name, emailAdress, date, events)

    //Verify email already exists in database...

    // Register person in database...
    try {

        People.create({
            name_person: name,
            email: emailAdress,
            birth_date: date,
            event_choice: events
        })

        await database.sync()

        console.log("[+] User created!")
    
    }catch (err) {
        console.log("[!] Something went wrong!" + err)
    }
    
}


const getAll = async () => {

    return await People.findAll()

}


const remove = async (email) => {
    
    const person = await People.findOne({ where: { email: email}})

    if(!person){
        let message = "User not found!"
        return message
    }

    await People.destroy({ where: {id_person: person.id_person}})
    
    let message = "User has been remove"
    return message



}

const update = async (name, email, birth_date, event_choice) => {

    const events = JSON.stringify(event_choice[0])
    const data = []
    const person = await People.findOne({ where: {email: email}}) 

    data.push(name, email, birth_date, events)

    for(let index in data){
        if(data[index] == undefined){
            continue
        }else{
            switch(index){

                case "0":
                    person.name_person = data[index]
                    person.save()
                    break

                case "1":
                    person.email = data[index]
                    person.save()
                    break

                case "2":
                    person.birth_date = new Date(birth_date)
                    person.save()
                    break

                case "3":
                    person.event_choice = data[index]
                    person.save()
                    break

                default:
                    break

            }
        }
    }
}


const events = async (email) => {

    const person = await People.findOne({ where: { email: email}})

    const choice = person.event_choice 

    return choice


}

module.exports = {
    register,
    getAll,
    remove,
    update,
    events
}
