> this
  - JavaScript 的 this 总是指向一个对象，而具体指向哪个对象是在
运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

### this 指向问题
  #### 作为对象的方法调用
    - 当函数作为对象的方法被调用时，this 指向该对象
  ```ts
  let obj = {
  name: 1,
  getName: function() {
    console.log("name", this.name);
    }
  };
  obj.getName()
  ```

  #### 作为普通函数调用
    - 当函数不作为对象的属性被调用时，也就是我们常说的普通函数方式，此时的 this 总是指向全局对象。在浏览器的 JavaScript 里，这个全局对象是 window 对象

  #### 构造器调用
  ```ts
  const say = function(){
    this.name = 'say my name'
  }
  const b = new say()
  console.log(b.name)
  ```
  - 如果构造器显式地返回了一个 object 类型的对
象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的 this

  ```js
  let o = function () {
    this.name = "i am o";
    return {
      name: "i am k"
    };
  };
  const oo = new o()
  console.log(oo.name) // i am k
  ```

  - 如果构造器不显式地返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述问题
   ```js
  let o = function () {
    this.name = "i am o";
    return "i am k"
  };
  const oo = new o()
  console.log(oo.name) // i am o
   ```


  #### Function.prototype.call 或 Function.prototype.apply 调用
  - 跟普通的函数调用相比，用 Function.prototype.call 或 Function.prototype.apply 可以动态地 改变传入函数的 this

  