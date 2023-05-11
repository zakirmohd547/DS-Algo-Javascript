let arr = [10, 20, 30, 40, 50, 60];
let add = 90;
let pos = 2;

// for (let i = arr.length - 1; i >=0; i--) {
//     console.log("i",i)
//     if (i >= pos) {
//         arr[i + 1] = arr[i];
//         if(i==pos){
//             arr[i]=add;
//         }
//     }
    
// }
// console.log("arr",arr);

// second approach
let newArr=[];
for(let i=0; i<arr.length; i++){
    if(i<pos){
        newArr.push(arr[i])
    }
    if(i>=pos){
        if(i==pos){
            newArr.push(add)
        }
        newArr[i+1]=arr[i]
    }
}

console.log("newArr",newArr)