var pool = require('../setting');
var Q = require('q'); //promise
function page(page = {}){
	this.title = page.title || '';
	this.introduct = page.introduct || '';
	this.time = page.time || '';
	this.id = page.id || '';
	this.type = page.type || '';
}

page.prototype = {
	save:function(){
		var defer = Q.defer();
		var params = [this.title,this.introduct,this.time,this.type,this.id];
		var sql = 'INSERT INTO page (title,introduct,time,type,id) values(?,?,?,?,?)';
		pool.query(sql,params,function(err){
				if(err){
					return defer.reject(err)
				}
				else defer.resolve('success');
			})
		return defer.promise
	},
	getPage:function(){
		var defer = Q.defer();
		var sql = 'SELECT * from page';
		pool.query(sql,function(err,results,fileds){
			if(err){
				return defer.reject(err)
			}
			else defer.resolve([results,fileds])
		})
		return defer.promise;
	}
}
module.exports = page;