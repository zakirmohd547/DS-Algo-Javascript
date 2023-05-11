// linear search like we can simply perform loop and match the cases and return it

function searchArr(arr,find){
    let position=undefined;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==find){
            position=i;
            break;
        }
    }
    return position;
}

let arrVal=[1,23,5,4,2,68,6,8];
let find=8

console.log(searchArr(arrVal,find))