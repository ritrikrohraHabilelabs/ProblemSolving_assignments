function arrIdxSum(arr, num) {

    arr.sort((a, b) => a - b);
    console.log(arr);
    console.log(`SUM : ${num}`);
    let length = arr.length;
    let j = length - 1;

    for (let i = 0; i < length; i++) {
        if (i == j) {
            return false
        }
        else if (arr[i] + arr[j] == num) {
            console.log(i, j);
            return true
        }
        else if (arr[i] + arr[j] > num) {
            j--;
            i--;
        }
    }
}

console.log(arrIdxSum([5, 183, 5, 12, 6, 183], 10))