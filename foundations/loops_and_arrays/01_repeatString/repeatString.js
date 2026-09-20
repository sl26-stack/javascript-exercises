const repeatString = function(text, repeats) {
    let new_string = "";
    if (repeats < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < repeats ; i++) {
        new_string = new_string + text;
        }
    }
    return new_string;
};

// Do not edit below this line
module.exports = repeatString;
