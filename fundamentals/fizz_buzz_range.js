function fizz_buzz_range(start, stop) {
  if (start > stop) return null;
  let res = '';
  for (let i = start; i <= stop; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += 'FizzBuzz '
    } else if (i % 3 === 0) {
      res += 'Fizz '
    } else if (i % 5 === 0) {
      res += 'Buzz '
    } else {
      res += `${i} `
    }
  }
  return res;
}
// console.log(fizz_buzz_range(1, 5))
console.log(fizz_buzz_range(11, 20))