//@param {String} str

function objectToString(str) {
    let arr = str.split(";"); //splitting it into an array
    let obj = {} //intializing the object
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("="); //splitting into subArray, creating 2D-array
        obj[arr[i][0].trim()] = arr[i][1].trim() //removing spaces from left and right
    }
    console.log(str);
    console.log(obj);
}

objectToString("name = sameer; city = jaipur;age=21")