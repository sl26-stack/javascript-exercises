const palindromes = function (word) {
    const letOrNum = /[a-zA-Z0-9]/;

    const cleanArrWord = word
    .toLowerCase()
    .split("")
    .filter(item => letOrNum.test(item))
    .join("");

    let reversedWord = cleanArrWord.split("").reverse().join("");
    return reversedWord === cleanArrWord;
};

// Do not edit below this line
module.exports = palindromes;
