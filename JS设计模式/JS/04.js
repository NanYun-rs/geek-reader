const getSingle = (fn) => {
  let result;
  return () => {
    result || (result = fn.apply(this, arguments))
  }
}



const showMe = (name) => {
  return name
}

const show = getSingle(showMe)

const a = show()


const b = show()

console.log(a === b)