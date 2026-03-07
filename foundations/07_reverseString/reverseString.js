const reverseString = function(word) {
    let revesed="";
    for (let index = word.length-1; index>=0; index--) {
        revesed+= word[index];
        
    }
    return revesed;
};

// Do not edit below this line
module.exports = reverseString;
