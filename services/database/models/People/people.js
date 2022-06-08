const  Sequelize  = require('sequelize')
const database = require('../../db')

const People = database.define("people", {
    id_person: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name_person:{
        type: Sequelize.STRING(255),
    },
    email:{
        type: Sequelize.STRING(255),
        unique: true,
    },
    birth_date:{
        type: Sequelize.DATE
    },
    event_choice:{
        type: Sequelize.STRING(255),
        allowNull: true,
    }

}, { tableName: 'people'});


module.exports = People;