官方源码:

https://github.com/vuejs/vue/blob/v2.5.13/src/core/observer/

**了解发布订阅之前，我们需要知道观察者模式**

~~~
function Dep() {//主题对象
  this.subs = []; //订阅者列表
}
Dep.prototype.notify = function() { //主题对象通知订阅者
  this.subs.forEach(function(sub){ //遍历所有的订阅者，执行订阅者提供的更新方法
    sub.update();
  });
}
function Sub(x) { //订阅者
  this.x = x;
}
Sub.prototype.update = function() { //订阅者更新
  this.x = this.x * this.x;
}
var pub = { //发布者
  publish: function() {
    dep.notify(); 
  }
};
var dep = new Dep(); //主题对象实例
Array.prototype.push.call(dep.subs, new Sub(1), new Sub(2), new Sub(3)); //新增 3 个订阅者
pub.publish(); //发布者发布更新
~~~

观察者模式有三个对象， 1个发布者（pub）1个主题对象（dep）一堆订阅者(sub)

发布者负责发布，主体对象里存在订阅者列表。

**对于Vue 实例中的data中每一个属性都是一个dep 而用到这些地方的 都是sub，当这些属性值变化时，观察者通过监听捕获变化，告诉这个dep去notify 通知每个订阅者**

![https://geniuspeng.github.io/image-storage/blog/vue/vue-reactivity.png](https://geniuspeng.github.io/image-storage/blog/vue/vue-reactivity.png?w=651&h=327)



##### Observer对象

字面意思是一个观察者，它的主要功能是做数据劫持，在数据获得更新的时候（拦截set方法），执行主题对象（Dep）的notify方法，通知所有的订阅者（Watcher）。

看下Observer的构造函数

~~~
constructor (value: any) {
  this.value = value
  this.dep = new Dep() //主题对象
  this.vmCount = 0
  def(value, '__ob__', this) //观察后设置_ob_标志代表已观察
  if (Array.isArray(value)) {
    const augment = hasProto
      ? protoAugment
      : copyAugment
    augment(value, arrayMethods, arrayKeys) //如果value是数组 则循环设置
    this.observeArray(value)
  } else {
    this.walk(value) //如果是对象则调用walk来设置
  }
}

在构造函数中，会给value增加ob属性，作为数据已经被Observer观察的标志。如果value是数组，就使用observeArray遍历value，对value中每一个元素调用observe分别进行观察。如果value是对象，则使用walk遍历value上每个key，对每个key调用defineReactive来获得该key的set/get控制权。

~~~



+ observeArray: 遍历数组，对数组的每个元素调用observe
+ observe: 检查对象上是否有**ob**属性，如果存在，则表明该对象已经处于Observer的观察中，如果不存在，则new Observer来观察对象（其实还有一些判断逻辑，为了便于理解就不赘述了）
+ walk: 遍历对象的每个key，对对象上每个key的数据调用defineReactive
+ defineReactive: 通过Object.defineProperty设置对象的key属性，使得能够捕获到该属性值的set/get动作。一般是由Watcher的实例对象进行get操作，此时Watcher的实例对象将被自动添加到Dep实例的依赖数组中，在外部操作触发了set时，将通过Dep实例的notify来通知所有依赖的watcher进行更新。（后面详细介绍）

defineReactive方法如下，这是observer类的一个核心方法：

~~~
function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}

~~~

defineReactive 是对 Object.defineProperty 方法的包装，结合 observe 方法对数据项进行深入遍历，最终将所有的属性就转化为 getter 和 setter。至此，所有的数据都已经转换为 Observer 对象。即数据的读操作都会触发 getter 函数，写操作都会触发 setter 函数。

那走到这里，会有很多问题，比如Dep在哪？如何往Dep中添加订阅者？

##### Dep对象（主题对象）





