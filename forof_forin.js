// for of loop basically use for array data type
// for in loop basically use for object data type

let arr=[1,2,3,4,5,6];
let obj={name:"mohd",age:20,education:"graduate"}
for(val of arr){
    console.log(val)
}

for(x in obj){
    // it will return ket only
    console.log(obj[x])
}