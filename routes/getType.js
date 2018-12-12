var express = require('express');
var router = express.Router();
var page = require('../model/page');
/* GET home page. */
router.get('/',function(req, res, next){
	var myPage = new page();
	myPage.getType()
	.then((r)=>{
		var type = [];
		r.map((item,index)=>{
			type[index] = item.TYPE;
		})
		res.json(type);//返回查询的结果
	})
	.catch((err)=>{
		console.log(err);
	})
});

module.exports = router;