var mysql = require('mysql');

var conn = function(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'curso_node_primeiro'
    });
}

module.exports = conn;