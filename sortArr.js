//approad is basicall swap is use we swapped big value with small and small value with big.
// also one loop will not work in sorting case.

// let arr=[40,30,52,04,63];
// function SortArr(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j]>arr[j+1]){
//                 let tempval=arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j]=tempval;
//             }
//         }
//     }
//     console.log(arr)
// }

// SortArr(arr)

// let arr1=[20,10,30,40,50];

// function SortVal(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i+1];
//             arr[i+1]=arr[i];
//             arr[i]=temp;
//         }
//     }

//     console.log(arr);
// }

// SortVal(arr1);

let newArr = [10, 5, 12, 4];

function sortArrayNew(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j+ 1] < data[j]) {
                let temp = data[j + 1];
                data[j + 1] = data[j];
                data[j] = temp;
            }
        }

    }
}
sortArrayNew(newArr);
console.log(newArr)
