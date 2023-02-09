// @param {Array} arr
// @param {Number} k -> specific largest number, for examples- third highest(3), second highest(2)

function specificLargestNum(arr, k) {
    arr.sort((a, b) => b - a);
    let length = arr.length;
    let temp = arr[0];
    let count = 1;
    for(let i = 0; i < length; i++){
        if(arr[i] != temp){
            count++
            temp = arr[i];
            if(count == k){
                return console.log(arr[i]);
            }
        }
    }
}

specificLargestNum([1,1,2,2,2,3,3,4], 2)