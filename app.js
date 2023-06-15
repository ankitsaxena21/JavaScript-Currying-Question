function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFn(...args, ...next);
      };
    }
  };
}

const currySum = curry(sum);
console.log(currySum(1)(2)(3)(4));
console.log(currySum(1, 2)(3, 4));
console.log(currySum(1, 2, 3)(4));
console.log(currySum(1, 2, 3, 4));
