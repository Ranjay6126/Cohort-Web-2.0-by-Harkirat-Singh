const nums = [1, 2, 3];

const result = nums
  .map(x => x * 2)
  .filter(x => x > 2)
  .reduce((a, b) => a + b, 0);