//@param {Array} arr (array)
//@param {Number} num 

function arrIdxSum(arr, num) {

    if (arr.length == 0) { //if length of elem is less than 
        console.log("EMPTY ARRAY", arr);
        return false
    }

    else {
        arr.sort((a, b) => a - b);
        console.log(arr);
        console.log(`SUM : ${num}`);
        let length = arr.length;
        let j = length - 1;

        for (let i = 0; i < length; i++) {
            if (i == j) {
                return false
            }
            else if (Number(arr[i]) + Number(arr[j]) == num) {
                console.log(i, j);
                return true
            }
            else if (Number(arr[i]) + Number(arr[j]) > num) {
                j--;
                i--;
            }
        }
    }
}

console.log(arrIdxSum([], 13))