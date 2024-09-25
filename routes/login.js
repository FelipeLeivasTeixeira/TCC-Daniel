var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'login - ImportAê' });
});

router.post('/', (req, res) => {
  const { email, senha } = req.body;
  Usuario.findOne({ where: { email } })
  .then((usuario) => {
    if (!usuario) {
      res.status(401).send({ message: 'Usuário não encontrado' });
    } else {
      const senhaValida = bcrypt.compareSync(senha, usuario.senha);
      if (!senhaValida) {
        res.status(401).send({ message: 'Senha inválida' });
      } else {
        req.session.usuario = usuario;
        res.send({ message: 'Usuário logado com sucesso' });
      }
    }
  })
  .catch((err) => {
    res.status(500).send({ message: 'Erro ao logar o usuário' });
  });
});


module.exports = router;