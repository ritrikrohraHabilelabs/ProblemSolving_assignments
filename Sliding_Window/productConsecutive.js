function productConsecutive(arr, prod){
    let length = arr.length;
    let tempProd = 1
    let count = 0;
    for(let i = 0; i < length; i++){
        tempProd *= arr[i];
        count++
        if(tempProd >= prod){
            count--;
            tempProd = 1;
        }
    }
}