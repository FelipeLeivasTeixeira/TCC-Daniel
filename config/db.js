const { Sequelize } = require('sequelize');

// Crie a conexão com o banco de dados MySQL
const sequelize = new Sequelize('importae', 'root', '', {
  host: 'localhost', // ou o IP do servidor MySQL
  dialect: 'mysql',  // define o tipo do banco de dados
});

module.exports = sequelize;