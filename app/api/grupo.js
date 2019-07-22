var api = {};

api.lista = function(req,res){
  var grupos = [
    {_id: 1,nome: 'esporte'},
    {_id: 2, nome: 'animais'},
    {_id: 3, nome:'lugares'}
  ]
  res.json(grupos);
}

module.exports = api;
