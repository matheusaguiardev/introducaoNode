var clienteController = require('../controllers/clienteController');

module.exports = function(app){
    app.get('/contato', function(req,res){
        res.render('site/contato') // (render) = para renderizar o arquivo -> transformar em HTML
    });
    
    app.get('/', function(req,res){
       clienteController.index(req,res); // modulo index selecionado dentro do controller
    });

    app.post('/', function(req,res){
        clienteController.store(req,res); 
     });

    app.get('/detalhe/:id', function(req,res){
        clienteController.show(req,res); 
    });

};