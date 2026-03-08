const removeFromArray = function(array,...args) {
    const newarray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!args.includes(element)){
            newarray.push(element); 
            
        }
    }
    return newarray;

};

// Do not edit below this line
module.exports = removeFromArray;
