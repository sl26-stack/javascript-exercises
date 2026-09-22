const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0,
  );
};

const multiply = function(arr) {
  const initialValue = 1;
  return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue,
  );
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  if (!num == 0) {
    const arr = Array.from({length: num}, (value, index) => index + 1)
    return arr.reduce(
      (accumulator, currentValue) => accumulator * currentValue
    )
  } else {
    return 1
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
