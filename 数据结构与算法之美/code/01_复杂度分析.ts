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

let a = 0;
let saveMap = {};
function f(n: number) {
  let calc;
  if (n === 1) return (a = a + 1);
  if (n === 2) return (a = a + 2);
  if (saveMap.hasOwnProperty(`${n}`)) {
    return saveMap[n];
  }
  calc = f(n - 1) + f(n - 2);
  saveMap[n] = calc;
  return calc;
}
f(8);

console.log(a);
