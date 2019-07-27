function spiralSum (n) {
    const numArray = [];
    for (let i = 0; i <= n; i++) {
      if (i % 2 != 0 && i > 1) numArray.push(i);
    }
    const newArray = numArray.map(calcValue);
    function calcValue(value) {
      const x = Math.pow(value, 2);
      return (4 * x) - (6 * value) + 6;
    }
    const add = (a, b) => a + b;
    const sum = newArray.reduce(add);
    return sum + 1;
}

console.log(spiralSum(5));

/*
// Short Version
function spiralSum(x) {
    return (x * (x * (4 * x + 3) + 8) - 9) / 6;
}

console.log(spiralSum(1001));
*/
