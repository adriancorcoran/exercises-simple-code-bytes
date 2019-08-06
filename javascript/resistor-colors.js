const getCode = colorsArray => {
  // create data structure
  const codes = {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9
  };
  // return
  return codes[colorsArray[0]] * 10 + codes[colorsArray[1]];
};

const num = getCode(["Orange", "Yellow"]);
console.log(num);
