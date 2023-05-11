// here we are searching data through binary, also we can perform binary search on only sorted array
// approach will be divide array in two equal part and will find the mid point
// if our searching value is less than mid point then will search pervious data otherwise will search next data

// function binarySearch(){
//     let arr=[10,12,18,19,21,25,29,30,40,45,50,100,120];
//     let position= undefined;
//     let start=0;
//     let end=arr.length-1;
//     let find=100;

//     while(start<=end){
//         let mid=Math.floor((start+end)/2);
//         if(arr[mid]==find){
//             position=mid;
//             break;
//         }else if(arr[mid]<find){
//             start=mid+1
//         }else{
//             end=mid-1
//         }
//     }
//     console.log("positon",position)

// }
// binarySearch();


// let arr = [10, 11, 15, 16, 20, 21, 36, 40];
// let start = 0;
// let end = arr.length - 1;
// let find = 20;
// let position;
// function recursiveBinarySearch(data, start, end) {
//     let mid = Math.floor((start + end) / 2);
//     if (data[mid] == find) {
//         position = mid;
//         return true;
//     } else if (data[mid]<find) {
//         recursiveBinarySearch(data, mid + 1, end);
//     } else {
//         recursiveBinarySearch(data, start, mid-1);
//     }
// }
// recursiveBinarySearch(arr, start, end)
// console.log("position",position)

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
5-1
function fib(n){
    let a=0;
    let b=1;
    // base condition
    if(n==1){
        console.log(0,1)
    }else if(n>=2){
        console.log(a,b)
        for(let i=0; i<n; i++){
            let c=a+b;
            a=b;
            b=c;
            console.log(c)
        }
    }
}
fib(5)