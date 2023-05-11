// recursion example

// function printval(n,maxLength){
//     if(n<maxLength){
//         console.warn(n);
//         printval(n+1,maxLength)
//     }
// }
// printval(0,10)

// function sumOfNumbers(value){
//     //base condition
//     if(value==0){
//         return 1
//     }
//     return value+sumOfNumbers(value-1)
// }

// console.warn(sumOfNumbers(10))

// function factorial(n){
//     //base condition
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.warn(factorial(10))

// program to display fibonacci sequence using recursion

// 0,1,1,2,3,5

let arr=[0,1];
let counter=0;
let n=100;

function fib(a,b){
    //base condition
    if(counter==n){
        return
    }else{
        counter+=1;
        arr.push(a+b);
        //0,1,1,2---a=1,b=1
        fib(b,a+b);
    }
}
fib(arr[0],arr[1])
console.log("arr",arr)