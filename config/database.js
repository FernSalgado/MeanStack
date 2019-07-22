module.exports = function(uri){
  var mongoose = require('mongoose');

  mongoose.connect('mongodb://'+uri);

  mongoose.connection.on('connected', function(){
    console.log('Conectado ao banco de dados');
  });

  mongoose.connection.on('error', function(){
    console.log('Falha na conexão');
  });

  mongoose.connection.on('disconnected', function(){
    console.log('Desconectado do MongoDB');
  });

  process.on('SIGINT',function(){
    mongoose.connection.close(function(){
      console.log('Conexão fechada pelo termino da app.');
      process.exit(0);
    });
  });

}
