const sumAll = function(a, b) {
    if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        if (b > a) {
            let sum_val = 0;
            for (let i = a; i <= b; i++) {
                sum_val = sum_val + i;
            }
            return sum_val
        } else {
            let sum_val = 0;
            for (let i = b; i <= a; i++) {
            sum_val = sum_val + i;
            }
            return sum_val
        }   
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
