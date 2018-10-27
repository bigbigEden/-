

**首页**

~~~
/getNews 返回最新发布的前5个文章放在首页

{
	pages:[{
      title:''文章标题,
      time:''发布时间,
      type:''所属类型,
      introduct:文章简介,
      id:'' 具体的文章id
	},{
        
	},]
}
~~~



**伊甸园**

~~~
/getAll  返回所有的文章  最新的在最前面

{
	pages:[{
      title:''文章标题,
      time:''发布时间,
      type:''所属类型,
      introduct:文章简介,
      id:'' 具体的文章id
	},{
        
	},]
}

~~~





#### 具体页面

~~~
/getdetails?id = xxx
返回指定id的文章
(markDown转换后的页面)
~~~

