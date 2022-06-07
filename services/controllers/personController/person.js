const database = require('../../database/db')
const People = require('../../database/models/People/people')


const register = async (name, emailAdress, birth_date, event_choice = null) => {

    date = new Date(birth_date)
    console.log(name, emailAdress, date, event_choice)

    //Verify email already exists in database...

    // Register person in database...
    try {

        People.create({
            name_person: name,
            email: emailAdress,
            birth_date: date,
            event_choice: event_choice
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

module.exports = {
    register,
    getAll,
}
