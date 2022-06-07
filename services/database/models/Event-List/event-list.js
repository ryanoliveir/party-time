const  Sequelize  = require('sequelize')
const database = require('../../db')

const EventList = database.define("event_list",{
    id_event:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
    },
    date_event:{
        type: Sequelize.DATE
    },
    event_description:{
        type: Sequelize.STRING(255)
    },
    people:{
        type: Sequelize. INTEGER
    }


}, { tableName: "event_list"})