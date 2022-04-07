const { Sequelize } = require('sequelize');

// Connect to postgres DB
module.exports = new Sequelize('postgres://postgres:postgres@localhost:5432/test')
