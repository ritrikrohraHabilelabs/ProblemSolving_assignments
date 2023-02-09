//-----SWA - SLIDING WINDOW APPROACH-----

//@param {Array} arr , accepts an array of length equal or greater than 'k'
//@param (Number) k , accepts a number that denotes length of subArray

//SWA means SLIDING WINDOW APPROACH

async function maxSubArraySWA(arr, k) {

    try {
        let err = await errHandleMaxSubArray(arr, k);

        if (err.isError) { //if error comes
            console.log(err.msg)
            return false
        }   
        else {
            const length = arr.length - k;
            let sum = 0 //initializing sum
            let maxSum; //maxSum gets stored
            for (let i = 0; i < k; i++) {
                sum += arr[i];
            }
            maxSum = sum;
            for (let i = 1; i <= length; i++) {
                sum = sum - arr[i - 1] + arr[i + k - 1]
                if (maxSum < sum) {
                    maxSum = sum
                }
            }
            return console.log("SLIDING WINDOW -> ", maxSum);
        }
    }
    catch (err) {
        console.log(err);
        return false
    }
}

maxSubArraySWA([0, -1, -4, 1, 0, 1, 1], 3)

async function errHandleMaxSubArray(arr, k) {
    try {
        if (arr.length < k) {
            return {
                msg: "LENGTH OF SUB ARRAY IS GREATER THAN THE LENGTH OF THE ARRAY PROVIDED",
                isError: true
            }
        }
        else if (k < 0) {
            return {
                msg: "LENGTH OF THE SUB ARRAY IS SMALLER THAN 0",
                isError: true
            }
        }
        else {
            return true
        }
    }
    catch (err) {
        console.log("ERROR HANDLE CATCH -> ", err);
        return false
    }
}