const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fotoPerfil: {
    type: DataTypes.STRING, // Pode ser a URL ou o caminho do arquivo
    allowNull: true // Foto de perfil é opcional
  }
});

module.exports = Cliente;