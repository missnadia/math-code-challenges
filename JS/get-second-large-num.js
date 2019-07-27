function getSecondLargest(nums) {
  const maxNum = Math.max(...nums)
  var orderArr = nums.sort(function(a, b) {
    return (+a) - (+b);
  }).reverse();
  for (let i = 0; i < orderArr.length; i++) {
    if (orderArr[i] < maxNum) {
      return orderArr[i]
    }
  }
}

const nums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
console.log(getSecondLargest(nums));
