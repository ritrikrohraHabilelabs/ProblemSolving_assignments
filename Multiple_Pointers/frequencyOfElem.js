function freqElem(arr) {

    if (typeof arr == "string") {
        arr = [...arr];
        arr.sort()
    }
    else if(typeof arr == "number"){
        arr = String(arr)
    }
    else {
        arr.sort((a, b) => a - b)
    }

    let length = arr.length;
    let temp = arr[0]
    let count = 0;
    let freqObj = {}

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