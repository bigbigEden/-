####包装类 

~~~
原始值 才存在包装类  string number null undefined 布尔
同时 null 和undefined 没有包装类
其他的为  array object symbol set 之类的
var str = '123456789'
为包装类添加属性 str.length = 1111;
str.length // 9

包装类 添加属性时
过程大概是 先new 了一个对象，然后给这个对象传属性，故原始变量不会有这个属性 
str = new String('123456789');
str.length = 1111;
相当于给这个包装类添加了属性，因此会销毁。


~~~

#### 圣杯模式

~~~
function inherit(Origin, Target) {
    function F() {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;//Target的真正原型
}

var inherit2 = (function(){  
  var F = function(){};  
  return function(Parent, Child){  
    F.prototype = Parent.prototype;  
    Child.prototype = new F();  
    Child.prototype.constructor = Child;  
    Child.prototype.uber = Parent.prototype;  
  }  
})();
私有化变量
~~~



~~~
function test(){
    var n  = 1;
    function add(){
        var m = 2;
        m++;
        n++;
        console.log(n,m);
    }
    return {n:n, add:add}
}
var re1 = test(); 
var re2 = test(); 
re1.add();	// 2 3
re1.add();  // 3 3   
console.log(re1.n); //1
~~~

