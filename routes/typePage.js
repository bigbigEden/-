var express = require('express');
var router = express.Router();
var page = require('../model/page');
/* GET home page. */
router.get('/',function(req, res, next){
	var type = req.query.type ;//类型
	var myPage = new page();
	myPage.getPage(type)	
	.then(([results,fileds])=>{
		res.json(results);
	})
	.catch((err)=>{
		console.log(err);
	})
});

module.exports = router;