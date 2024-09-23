const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vendedor = sequelize.define('Vendedor', {
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
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fotoPerfil: {
    type: DataTypes.STRING, // Pode ser a URL ou o caminho do arquivo
    allowNull: false // Foto de perfil é obrigatória
  },
  origemImportacao: {
    type: DataTypes.ENUM('EUA', 'China'),
    allowNull: false
  },
  sobreMim: {
    type: DataTypes.TEXT,
    allowNull: true // Campo opcional
  }
});

module.exports = Vendedor;