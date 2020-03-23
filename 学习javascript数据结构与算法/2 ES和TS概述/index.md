#### const

> 只读的CONST允许我们重新修改或者变更对象的属性、但变量本身的引入- 内存地址 不可更改，即 不能重新赋值

#### 数组解构

- 交换值 、不需要创建额外临时变量

  ` [x,y] = [y,x]`

#### 简写方法名

```js
let simple = {
  a: 'name',
  calla() {
    return 'say a'
  }
}
```

#### Class

> 子类通过 super 调用父类的实例

- getter setter
  
```js
class School {
  constructor() {
    this.st = [1, 2, 3];
  }
  get student() {
    return this.st
  }
  set student(value) {
    this.st.push(value)
  }
}
let ds = new School()
ds.student = '12345'
console.log('ds', ds.student)
```