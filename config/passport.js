const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Cliente = require('../models/cliente');
const Vendedor = require('../models/vendedor');

module.exports = function(passport) {
  passport.use('local-cliente', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'senha'
    }, async (email, senha, done) => {
      try {
        const cliente = await Cliente.findOne({ where: { email } });
        if (!cliente) {
          return done(null, false, { message: 'Usuário não encontrado.' });
        }

        const match = await bcrypt.compare(senha, cliente.senha);
        if (!match) {
          return done(null, false, { message: 'Senha incorreta.' });
        }

        return done(null, cliente);
      } catch (err) {
        return done(err);
      }
    }
  ));

  passport.use('local-vendedor', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'senha'
    }, async (email, senha, done) => {
      try {
        const vendedor = await Vendedor.findOne({ where: { email } });
        if (!vendedor) {
          return done(null, false, { message: 'Vendedor não encontrado.' });
        }

        const match = await bcrypt.compare(senha, vendedor.senha);
        if (!match) {
          return done(null, false, { message: 'Senha incorreta.' });
        }

        return done(null, vendedor);
      } catch (err) {
        return done(err);
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, { id: user.id, type: user instanceof Cliente ? 'cliente' : 'vendedor' });
  });

  passport.deserializeUser(async (user, done) => {
    try {
      let userData;
      if (user.type === 'cliente') {
        userData = await Cliente.findByPk(user.id);
      } else {
        userData = await Vendedor.findByPk(user.id);
      }
      done(null, userData);
    } catch (err) {
      done(err);
    }
  });
};
