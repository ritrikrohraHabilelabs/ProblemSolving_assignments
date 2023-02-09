function zeroLastShift(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (j > i) {
        if (arr[i] == 0) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j--;
        } else {
            i++;
        }
    }
    return console.log(arr);
}
shiftingZerosToRight([0, -1, 3, 4, 5, 0, 0, 0, 1, 2, 0, 4, 0])