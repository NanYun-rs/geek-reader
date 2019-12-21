> 鸭子类型
- 只关注对象的行为、而不关注对象本身

> 多态
- 同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结 果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的 反馈。
- 多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事 物”与 “可能改变的事物”分离开来
  
> 对象的多态性
```js
const makeSound = animal => {
  animal.sound();
};
class Dog {
  sound() {
    console.log("wang wang wang");
  }
}
class Cat {
  sound() {
    console.log("miao miao miao");
  }
}
makeSound(new Dog());
makeSound(new Cat());
```

#### 原型模式
- 原型编程 基本规则
  - 所有的数据都是对象
    - JavaScript 中的根对象是 Object.prototype 对象。Object.prototype 对象是一个空的 对象。我们在 JavaScript 遇到的每个对象，实际上都是从 Object.prototype 对象克隆而来的， Object.prototype 对象就是它们的原型。
  - 要得到一个对象、不是通过实例化类、而是找到一个对象作为原型并克隆它
    - JavaScript 的函数既可以作为普通函数被调用， 7 也可以作为构造器被调用。当使用 new 运算符来调用函数时，此时的函数就是一个构造器。 用
new 运算符来创建对象的过程，实际上也只是先克隆 Object.prototype 对象，再进行一些其他额 外操作的过程。
  - 对象会记住它的原型
    - 就 JavaScript 的真正实现来说，其实并不能说对象有 原型，而只能说对象的构造器有原型。对于“对象把请求委托给它自己的原型”这句话，更好 的说法是对象把请求委托给它的构造器的原型
  - 如果对象无法响应某个请求、它会把这个请求委托给它的原型
    - 实际上，虽然 JavaScript 的对象最初都是由 Object.prototype 对象克隆而来的，但对象构造 器的原型并不仅限于 Object.prototype 上，而是可以动态指向其他对象。

- 通过 Object.create( null )可以创建出没有原型的对象