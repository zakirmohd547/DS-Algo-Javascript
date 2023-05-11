// map data structure basically work like same as a object, but difference is given below
// map data {key=>value,key1=>value}, there is also another differences, you can set any type of key in map

let data= new Map([["name","mohd jagir"],[20,"age"],[false,"boolean"]]);
// console.warn(data)
//add
// data.set("data",{"name":"test"})
//remove
// data.delete("name")
//size
// console.log(data.size)
// delet all
// data.clear()
// check key
// data.has("name")

//with loop
// for(let x of data){
//     console.log(x[0]) //key
//     console.log(x[1]) // value
// }

//foreach
// data.forEach((value,key)=>{
//     console.log(key+"=>"+value)
// })
console.log(data)