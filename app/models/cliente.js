var db = require('../../config/db');

module.exports = function(){
    this.all = function(callback){
        var conn = db();
        return conn.query('select * from Clientes', callback);
    }

    this.find = function(id, callback){
        var conn = db();
        return conn.query('select * from Clientes where id = ?',id, callback); // o char ? é substituido pelo id
    }

    this.save = function(dados, callback){
        var conn = db();
        return conn.query('insert into Clientes set ?', dados, callback);
    }

    return this;
};