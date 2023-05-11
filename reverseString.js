//reverse string with stack datatypes

let arr=[];
let currentSize=arr.length;
let returnData;
function push(value){
    arr[currentSize]=value;
    currentSize+=1;
    // console.log("arr 2",arr)

}

function pop(){
    if(currentSize > 0){
        returnData=arr[currentSize-1]
        currentSize-=1;
        // console.log("currentSize",currentSize)
        arr.length=currentSize;
    }
    // console.log("arr 1",arr)
    return returnData
}

function reveseString(arr){
    for(let i=0; i<arr.length; i++){
        push(arr[i])
    }
    for(let i=0; i<arr.length; i++){
       arr[i]=pop()
    }
    console.log("arr",arr.join(""))
}
let string="testing";
let converTedString=string.split("")
reveseString(converTedString)
// push(10)
// push(20)
// pop()