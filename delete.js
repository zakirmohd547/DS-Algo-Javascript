let arr = [10, 20, 30, 40, 50, 60];
let add = 90;
let pos = 2;
// this is  our approach

// for(let i=0; i<arr.length; i++){
//     if(i==pos){
//         arr.splice(pos,1)
//     }
// }
// console.log("arr",arr);

for(let i=pos;i<arr.length-1; i++){
    arr[i]=arr[i+1];
}
arr.length=arr.length-1;
console.log("arr",arr)