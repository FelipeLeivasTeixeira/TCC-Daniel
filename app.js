var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registroRouter = require('./routes/registro');
var registroImportadorRouter = require('./routes/registroImportador');
var produtosRouter = require('./routes/produtos');
var chatRouter = require('./routes/chat');
var perfilImportadorRouter = require('./routes/perfilImportador');
var loginRouter = require('./routes/login');
var meuspedidosRouter = require('./routes/meuspedidos');
var edicaoclienteRouter = require('./routes/edicaocliente');
var painelRouter = require('./routes/painel');
var adicionarprodutoRouter = require('./routes/adicionarproduto');
var meusprodutosRouter = require('./routes/meusprodutos');
var meuspedidosimportadorRouter = require('./routes/meuspedidosimportador');
var chatimportadorRouter = require('./routes/chatimportador');
var checkoutRouter = require('./routes/checkout');
var indexlogadoRouter = require('./routes/indexlogado');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registro', registroRouter);
app.use('/registroImportador', registroImportadorRouter);
app.use('/produtos', produtosRouter);
app.use('/chat', chatRouter);
app.use('/perfilImportador', perfilImportadorRouter);
app.use('/login', loginRouter);
app.use('/meuspedidos', meuspedidosRouter);
app.use('/edicaocliente', edicaoclienteRouter);
app.use('/painel', painelRouter);
app.use('/adicionarproduto', adicionarprodutoRouter);
app.use('/meusprodutos', meusprodutosRouter);
app.use('/meuspedidosimportador', meuspedidosimportadorRouter);
app.use('/chatimportador', chatimportadorRouter);
app.use('/checkout', checkoutRouter);
app.use('/indexlogado', indexlogadoRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
