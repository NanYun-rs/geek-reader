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

function cal(m: number, n: number): number {
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
