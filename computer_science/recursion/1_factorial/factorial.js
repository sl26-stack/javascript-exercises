const factorial = function(num) {
    if (Number.isInteger && num == 0) return 1;
    if (num < 1 || !Number.isInteger(num)) return;
    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = factorial;