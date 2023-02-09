// @param {Array} arr

function zeroLastShift(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (j > i) {
        if (arr[i] == 0) { //if indexed number is zero
            let temp = arr[j]; //assigning the right most non-zero elem to temp
            arr[j] = arr[i]; //swapping
            arr[i] = temp; //swapping non-zero to zero 
            j--;
        } else {
            i++;
        }
    }
    return console.log(arr);
}

zeroLastShift([0, -1, 3, 4, 5, 0, 0, 0, 1, 2, 0, 4, 0])
zeroLastShift([0, 10])