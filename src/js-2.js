const Num = require('./js-1');

const mockData = [
  1,
  2,
  3,
  11,
  12,
  13,
];

const numArr = mockData.map((item) => new Num(item));

const results = [];

for (let i = 0; i < numArr.length; i++) {
  results.push(numArr[i].getSquareId());
}

// eslint-disable-next-line
console.log(results);
