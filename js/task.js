function sumMissingNumbers(arr) {
  let res = Math.max(...arr);
  let array = [];
  let result = []
  for (let i = 1; i <= res; i++) {
    array.push(i);
  }
  result = array.filter((item) => !arr.includes(item))
  return result
}
console.log(sumMissingNumbers([1, 3, 5, 7, 10]));
