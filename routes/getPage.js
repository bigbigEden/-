var express = require('express');
var router = express.Router();
var page = require('../model/page');
/* GET home page. */
router.get('/',function(req, res, next){
	var myPage = new page();
	myPage.getPage()
	.then((r)=>{
		res.json(r[0]);//返回查询的结果
	})
	.catch((err)=>{
		console.log(err);
	})
});

module.exports = router;