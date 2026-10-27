const contains = function(obj, word) {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            contains(value, word);
        } else if (value === word) {
            return true;
        }
    }
};
  
// Do not edit below this line
module.exports = contains;
