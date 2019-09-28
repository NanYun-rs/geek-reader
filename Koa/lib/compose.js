function compose(middleware) {

  if (!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!');
  }

  return function (ctx, next) {
    let index = -1;

    return dispatch(0);

    function dispatch(i) {
      if (i < index) {
        return Promise.reject(new Error('next() called multiple times'));
      }
      index = i;

      let fn = middleware[i];

      if (i === middleware.length) {
        fn = next;
      }

      if (!fn) {
        return Promise.resolve();
      }

      try {
        return Promise.resolve(fn(ctx, () => {
          return dispatch(i + 1);
        }));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

// const handelFn = compose([(ctx, next) => {
//   var a = 1
//   next()
//   var f = 5
// }, (ctx, next) => {
//   var b = 2
//   next()
//   var d = 4
// }, (ctx, next) => {
//   var c = 3
// }])

// const ctx = {
//   req: '',
//   res: ''
// }
// // debugger
// handelFn(ctx)


function count() {

  console.log(123);

  function next1() {

    console.log(234)

    function next2() {
      console.log(345)
    }

    next2()

    console.log(456)
  }

//   next1()

//   console.log(567)
// }

// count()