let str = "name = sameer; city = jaipur;age=21";
let arr = str.split(";");
let obj = {}
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split("=");
    obj[arr[i][0].trim()] = arr[i][1].trim()
}
console.log(str)
console.log(obj);