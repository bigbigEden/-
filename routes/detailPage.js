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
router.get('/', function(req, res, next) {
	fs_readdir('./public/upload')
	.then((r)=>{
		var re = new RegExp('[' + req.query.id + ']');
		console.log(re);
		for(var i = 0;i<r.length;i++){
			if(re.test(r[i])){
				filename = r[i];
				console.log(filename);
			}
		}
		return fs_readFile('./public/upload/' + filename);
	})
	.then((r)=>{
		var htmlStr = marked(r.toString());
		res.json(htmlStr);
	})
});

router.post('/',function(req,res,next){
})
module.exports = router;
