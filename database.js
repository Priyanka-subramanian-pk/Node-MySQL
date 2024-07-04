const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "db2",
    "root",
    "Prkz@123",
    {
        dialect: 'mysql',
        host: 'localhost',
    }
);

module.exports = sequelize;
