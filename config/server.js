
module.exports = function(){
    
    var express = require('express'); // importar o express
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express(); // executar
    app.set('view engine', 'ejs'); // importar ejs
    app.set('views', './app/views'); // Informar para o express que as views não estão no root do projeto
    
    app.use(bodyParser.json()); // suporte a json encoded bodies
    app.use(bodyParser.urlencoded({extended: true})); // suporte encoded bodies
    
    app.use(expressValidator()); // adicionando ao express o express-validator

    var routes = require('../app/routes/web'); 
    
    routes(app); // carregar as rotas para o express    

    app.listen(8000, function(){
        console.log('localhost:8000');
    });
};