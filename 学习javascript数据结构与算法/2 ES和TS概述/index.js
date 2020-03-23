let simple = {
  a: 'name',
  calla() {
    return 'say a'
  }
}

console.log('call a', simple.calla())


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