const strategies = {
  'S': (salary) => {
    return salary * 4
  },
  'A': (salary) => {
    return salary * 2
  }
}
const calcSalary = (level, salary) => {
  return strategies[level](salary)
}
const s = calcSalary('S', 10000)
console.log('s', s)