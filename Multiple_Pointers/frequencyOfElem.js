//@param {Array}, {String} or {Number} -> arr (it will get converted into array only)

function freqElem(arr) {

    if (typeof arr == "string") { //if string, convert it to array
        arr = [...arr];
        arr.sort()
    }
    else if(typeof arr == "number"){ //if number, convert it to array
        arr = String(arr)
    }
    else {
        arr.sort((a, b) => a - b) //sorting it in ascending order
    }

    let length = arr.length; //finding the length
    let temp = arr[0] 
    let count = 0;
    let freqObj = {} //object for the freq to get stored

    for (let i = 0; i < length; i++) {
        if (arr[i] == temp) {
            count++;
            freqObj[arr[i]] = count;
        }
        else {
            count = 1
            temp = arr[i];
            freqObj[arr[i]] = count;
        }
    }
    return freqObj;
}

console.log(freqElem("HEXAGONAL"));
console.log(freqElem(22446611));
console.log(freqElem([1,1,2,2,3])); 