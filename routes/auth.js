const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const Cliente = require('../models/cliente');
const Vendedor = require('../models/vendedor');

const router = express.Router();

// Cadastro Cliente
router.post('/registro', async (req, res) => {
  const { nome, email, senha, dataNascimento, telefone, fotoPerfil } = req.body;
  try {
    const hashSenha = await bcrypt.hash(senha, 10);
    const cliente = await Cliente.create({
      nome,
      email,
      senha: hashSenha,
      dataNascimento,
      telefone,
      fotoPerfil
    });
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente.' });
  }
});

// Cadastro Vendedor
router.post('/registroImportador', async (req, res) => {
  const { nome, email, senha, telefone, fotoPerfil, origemImportacao, sobreMim } = req.body;
  try {
    const hashSenha = await bcrypt.hash(senha, 10);
    const vendedor = await Vendedor.create({
      nome,
      email,
      senha: hashSenha,
      telefone,
      fotoPerfil,
      origemImportacao,
      sobreMim
    });
    res.status(201).json(vendedor);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar vendedor.' });
  }
});

// Login Cliente
router.post('/login-cliente', passport.authenticate('local-cliente', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

// Login Vendedor
router.post('/login-vendedor', passport.authenticate('local-vendedor', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
