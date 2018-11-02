var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');  //上传模块
var Q = require('q'); //promise
var fs = require('fs');
var page = require('../model/page');
/* GET users listing. */
function getTime(date){
	var year = date.getFullYear(); //获取完整的年份(4位)
	var month = date.getMonth() + 1; 
	var day = date.getDay();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds(); //获取当前秒数(0-59)
	return year +'/' + month +'/' + day +' ' + hours +':' + minutes + ':' + seconds; 
}
function fs_readdir(path){
	var defer = Q.defer();
	fs.readdir(path,function(err,files){
		if(err) defer.reject(err)
		else defer.resolve(files)
	})
	return defer.promise
}
function fs_rename(uploadPath,changePath){
	var defer = Q.defer();
	fs.rename(uploadPath,changePath,function(err){
		if(err) defer.reject(err)
		else defer.resolve()
	})
	return defer.promise;
}
function form_parse(req){
	var defer = Q.defer();
	var form = new multiparty.Form({
	 	encoding : 'utf-8',
	 	uploadDir:'./public/upload',
	 });
	form.parse(req,function(err,fileds,files){
		if(err) defer.reject(err);
		else defer.resolve([fileds,files]);
	})
	return defer.promise
}
function upload(fileds,files,id){
	var time  = getTime(new Date());
	var uploadPath = files.content[0].path;
	var changePath = './public/upload/' +id+'-'+ files.content[0].originalFilename;
	var message = {
		title:fileds.title[0],	
		introduct:fileds.introduct[0],
		type:fileds.type[0],
		id:id,
		time:time,
	}
	var myPage = new page(message);
	return Promise.all[myPage.save(),fs_rename(uploadPath,changePath)]
}
async function run(req){
	var mydir = await fs_readdir('./public/upload'); //获取文件目录
	var id = mydir.length + 1;
	var [fileds,files] = await form_parse(req); //将上传请求转换
	return upload(fileds,files,id);   //保存到数据库并且重命名
}
router.get('/', function(req, res, next) {
  	res.send('respond with a resource'); 
});

router.post('/',function(req,res,next){
	run(req)
	.then(()=>{
		console.log('保存成功');
		res.send('success');
	})
	.catch((err)=>{
		console.log('err'+err);
	})
})
module.exports = router;
