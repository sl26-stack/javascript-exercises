const removeFromArray = function(arr, ...otherArg) {
    let new_array = [];

    arr.forEach((element) => {
        if (!otherArg.includes(element)) {
            new_array.push(element);
        }
    });

    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
