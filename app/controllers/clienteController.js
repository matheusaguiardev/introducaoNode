var clientes = require('../models/cliente')();

module.exports.index = function(req, res){

    clientes.all(function(err, result){
        res.render('site/home',{clientes: result,  erros:{}, dados:{}}); // enviar um objeto para a view
    });
};

module.exports.store = function(req, res){
    var dados = req.body; // recebe as informações no formado json com o body-parser

    var minCaracter = 3;
    var maxCaracter = 20;

    req.assert('nome', 'Esse campo não pode ser vazio').notEmpty();
    req.assert('nome', 'O nome deve ter no mínimo '+minCaracter +' e no máximo '+maxCaracter+' caracteres').len(minCaracter,maxCaracter);
    req.assert('email', 'Esse campo não pode ser vazio').notEmpty();
    req.assert('email', 'Preencha um E-mail válido').isEmail();

    var validacaoErros = req.validationErrors();

    if(validacaoErros){
        console.log(validacaoErros);

        clientes.all(function(err, result){
            res.render('site/home',{clientes: result, erros: validacaoErros, dados:dados}); // enviar um objeto para a view
        });

        return;
    }

    clientes.save(dados, function(err, result){
        if(!err){
            console.log('Cliente salvo com sucesso !');
            res.redirect('/');
           } else {
            console.log('Erro ao adicionar o cliente');
            res.redirect('/'); // redireciona para a home
           }
    });
};

module.exports.show = function(req,res){
    clientes.find(req.params.id, function(err, result){ // pegar o parametro enviado
       if(result[0] && !err){
        res.render('site/detalhe', {cliente: result[0]});
       } else {
        console.log('Esse cliente não existe');
        res.redirect('/'); // redireciona para a home
       }
    }); 
};