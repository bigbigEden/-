var express = require('express');
var router = express.Router();
var fs = require('fs');
var Q = require('q'); //promise
var marked = require('marked');
/* GET users listing. */
function fs_readFile(file){
	var defer = Q.defer();
	fs.readFile(file,function (err, data) {
	    if (err) defer.reject(err) // rejects the promise with `er` as the reason
	    else defer.resolve(data) // fulfills the promise with `data` as the value
  	})
	  return defer.promise // the promise is returned
}
function fs_readdir(path){
	var defer = Q.defer();
	fs.readdir(path,function(err,files){
		if(err) defer.reject(err)
		else defer.resolve(files)
	})
	return defer.promise
}
async function read(url,req){
	var filename = ''; //读取文件名;
	var dir = await fs_readdir(url); //获取文件目录
	var re = new RegExp('[' + req.query.id + ']');
	for(var i = 0;i<dir.length;i++){
		if(re.test(dir[i])){
			filename = dir[i];
		}
	}
	return fs_readFile(url +'/'+ filename); //读取具体文件
}
router.get('/', function(req, res, next) {
	read('./public/upload',req)
	.then((r)=>{
		var htmlStr = marked(r.toString());
		res.json(htmlStr);
	})
	.catch((err)=>{
		console.log(err);
	})
});

router.post('/',function(req,res,next){
})
module.exports = router;
