var mysql = require('mysql');
var pool = mysql.createPool({
		host:'localhost',
		user:'root',
		password:'silence',
		port:'3306',
		database:'Eden',
		connectionLimit:100,//最大连接数100
});

module.exports = pool;