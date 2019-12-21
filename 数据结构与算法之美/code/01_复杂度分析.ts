function sum(n: number) {
  let sum = 0;
  let i = 1;
  for (; i <= n; i++) {
    sum = sum + i;
  }
}

function cal(n: number) {
  let sum = 0;
  let i = 1;
  for (; i <= n; i++) {
    let j = 1;
    for (; j <= n; j++) {
      sum = sum + i * j;
    }
  }
}

// const ss = sum(5)
// console.log(ss)

function logn(n: number) {
  let i = 1;
  while (i <= n) {
    i = i * 2;
  }
}

function calc(m: number, n: number): number {
  let sum_1 = 0;
  let i = 1;
  for (; i < m; ++i) {
    sum_1 = sum_1 + i;
  }

  let sum_2 = 0;
  let j = 1;
  for (; j < n; ++j) {
    sum_2 = sum_2 + j;
  }

  return sum_1 + sum_2;
}

function log(n: number) {
  let i = 0;
  let arr = [];
  for (; i < n; i++) {
    arr[i] = n;
  }
}

function findIndex(arr: [], n: number, x: number): number {
  let pos = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) pos = i;
    break;
  }
  return pos;
}

function func1() {
  fun2();
}

function fun2() {}

// function f(n: number) {
//   if (n === 1) return 1;
//   return f(n - 1) + 1;
// }

// 递归
// TODO: 没想明白怎么保存已经计算好的值

// let a = 0;
// let saveMap = {};
// function f(n: number) {
//   let calc;
//   if (n === 1) return (a = a + 1);
//   if (n === 2) return (a = a + 2);
//   if (saveMap.hasOwnProperty(`${n}`)) {
//     return saveMap[n];
//   }
//   calc = f(n - 1) + f(n - 2);
//   saveMap[n] = calc;
//   return calc;
// }
// f(8);

// console.log(a);

// 二分查找

function bSearch(x: number[], n: number): number {
  let l = 0,
    r = x.length - 1,
    guess;

  while (l <= r) {
    guess = Math.floor((r + 1) / 2);
    if (x[guess] === n) return guess;
    else if (x[guess] > n) r = guess - 1;
    else l = guess + 1;
  }
  return -1;
}

// let bGroup = [1, 3, 4, 5, 8, 9, 10];

// console.log(bSearch(bGroup, 3));

// 插入排序

function insert_example(x: number[], n: number) {
  // 循环不变式
  // p 指向下一个要比较的元素
  // p + 1 指向空位

  // index
  let p = x.length - 1;

  while (p >= 0 && x[p] > n) {
    x[p + 1] = x[p];
    p--;
  }
  // p+1 指向空位 while 结束后 对 p+1 空位进行赋值
  x[p + 1] = n;
}

// let insert = [1, 3, 4, 6, 7, 9];
// insert_example(insert, 8);
// console.log(insert);

function insert_sort(a: number[]) {
  for (let i = 1; i < a.length; i++) {
    insert_helper(a, i, a[i]);
  }
}

function insert_helper(a: number[], i: number, x: number) {
  // 循环不变式
  // P 指向 下一个要比较的元素

  let p = i - 1;

  while (p >= 0 && a[p] > x) {
    a[p + 1] = a[p];
    p--;
  }
  a[p + 1] = x;
}

let insertArray = [3, 1, 4, 5, 2, 9, 7];

// insert_sort(insertArray);

// console.log(insertArray);

// 插入排除

// function helper(a, i, x) {
//   // 循环不变式 p 指向下一个比较元素
//   let p = i - 1;
//   while (a[p] > x) {
//     a[p + 1] = a[p];
//     p--;
//   }
//   a[p + 1] = x;
// }

// function testInsert(a) {
//   for (let i = 1; i < a.length; i++) {
//     helper(a, i, a[i]);
//   }
// }

// testInsert(insertArray)
// console.log(insertArray)

// 冒泡排序

function swap(a: number[], i: number, j: number) {
  const x = a[i];
  a[i] = a[j];
  a[j] = x;
}

function bubble_sort(a: number[]) {
  // 外层循环 i
  // 内层循环 j
  //
  for (let i = a.length - 1; i >= 1; i--) {
    // 内层循环
    for (let j = 1; j <= i; j++) {
      a[j - 1] > a[j] && swap(a, j - 1, j);
    }
  }
}

bubble_sort(insertArray);
console.log(insertArray);
