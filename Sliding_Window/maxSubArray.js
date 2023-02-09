//-----BRUTE FORCE APPROACH-----

//@param {Array} arr , accepts an array of length equal or greater than 'k'
//@param (Number) k , accepts a number that denotes length of subArray

async function maxSubArray(arr, k) {

    try {
        let err = await errHandleMinSubArray(arr, k);

        if (err.isError) {
            console.log(err.msg)
            return false
        }
        else {
            const length = arr.length - k;
            let sum = 0 //initializing sum
            let minSum; //minSum gets stored
            for (let i = 0; i < k; i++) {
                sum += arr[i];
            }
            minSum = sum;
            for (let i = 1; i <= length; i++) {
                sum = sum - arr[i - 1] + arr[i + k - 1]
                if (minSum > sum) {
                    minSum = sum
                }
            }
            return console.log("SLIDING WINDOW -> ", minSum);
        }
    }
    catch (err) {
        console.log(err);
        return false
    }

    const length = arr.length - k; //length of the array till subtracted by the subarray length
    let maxSum; //maxSum gets stored
    for (let i = 0; i <= length; i++) {
        let currSum = 0 //sum of every consecutive pairs
        for (let j = 0; j < k; j++) {
            currSum += arr[j + i] //sum of every consecutive pairs
        }
        if (i == 0 || currSum > maxSum) { //only the first set and when the greater set gets assigned
            maxSum = currSum;
        }
    }
    return console.log("NORMAL", maxSum);

}

async function errHandleMinSubArray(arr, k) {
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