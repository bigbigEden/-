var mysql = require('mysql');
var pool = mysql.createPool({
		host:'47.101.205.156',
		user:'root',
		password:'silence',
		port:'3306',
		database:'eden',
		connectionLimit:100,//最大连接数100
});

module.exports = pool;