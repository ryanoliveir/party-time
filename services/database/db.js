const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "partytime",
    "root",
    "",
    {
        dialect: "mysql",
        host: "localhost",
        port: 3306,
        define: {
            timestamps: false,
        }
    }
)

module.exports = sequelize;