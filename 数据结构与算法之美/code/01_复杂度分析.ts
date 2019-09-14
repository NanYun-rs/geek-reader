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
