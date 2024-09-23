const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('importae', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Não sincronize aqui, deixe isso para o arquivo onde você usa as models

module.exports = sequelize;