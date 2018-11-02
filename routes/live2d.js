var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs');
/* GET home page. */
router.get('/',function(req, res, next){
	var file = path.join(__dirname,'../public/static/model.json');
	fs.readFile(file,'utf-8',function(err,data){
		if(err){
			return err
		}
		res.send(data)	
	})
});

router.get('/motions/:id',function(req,res,next){
	var id = req.params.id;
	var file = path.join(__dirname,'../public/static/live2d/motions/' + id);
	res.sendFile(file)
})
router.get('/textures/:id',function(req,res,next){
	var id = req.params.id;
	var file = path.join(__dirname,'../public/static/live2d/textures/' + id);
	res.sendFile(file)
})
router.get('/:id',function(req,res,next){
	var id = req.params.id;
	var file = path.join(__dirname,'../public/static/live2d/' + id);
	res.sendFile(file)
})

module.exports = router;