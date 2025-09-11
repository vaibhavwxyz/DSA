var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    if (i > 0) {
      row.push(1);
    }
    res.push(row);
  }
  return res;
};

let answer = generate(5);
console.log(answer);

// [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
