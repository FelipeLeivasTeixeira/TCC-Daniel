const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const formidable = require('formidable');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Cadastro de Cliente - ImportAê' });
});

router.post('/', (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './uploads';
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao processar o formulário' });
    } else {
      const { nome, email, senha, dataNascimento, telefone, tipo, deOndeImporta, sobreMim } = fields;
      const fotoPerfil = files.fotoPerfil.path;
      const senhaHash = bcrypt.hashSync(senha, 10);
      Usuario.create({
        fotoPerfil,
        nome,
        email,
        senha: senhaHash,
        dataNascimento,
        telefone,
        tipo,
        deOndeImporta,
        sobreMim
      })
      .then(() => {
        res.send({ message: 'Usuário criado com sucesso' });
      })
      .catch((err) => {
        res.status(500).send({ message: 'Erro ao criar o usuário' });
      });
    }
  });
});

module.exports = router;