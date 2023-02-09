//@param {Array} arr (array)
//@param {Number} idx (index)

function removeNthElem(arr, idx) {
    if (arr.length - 1 >= idx) {
        arr.sort((a, b) => a - b); //ascending order
        let length = arr.length;
        let newArr = []; //initializing new array to store all elem without the provided indexed elem
        for (let i = 0; i < length; i++){
            if(i != idx){ //all the elem except the provided indexed elem
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    else{
        console.log("INDEX IS GREATER THAN LENGTH");
        return false
    }
}

console.log(removeNthElem([2,5,7,9,10,23], 5));
console.log(removeNthElem([9,10,23], 0));