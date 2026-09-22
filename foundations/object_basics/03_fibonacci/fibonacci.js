const fibonacci = function(num) {
    let fibArr = [0];
    num = +num;
    if (num < 0 || !Number.isInteger(num)) {
        return "OOPS"
    } else {
        for (let i = 0; fibArr.length <= num; i++) {
            if (i == 0) {
                fibArr.push(1);
            } else {
                fibArr.push(fibArr[i] + fibArr[i - 1]);
            }
        }
    }
    return fibArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
