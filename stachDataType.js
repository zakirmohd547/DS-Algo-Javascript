
// stack basically work based on first come last out FILO

let arr=[];
let max=5;
let dataLength=arr.length

function push(value){
    if(dataLength<=max){
        arr[dataLength]=value;
        dataLength+=1;
    }else{
        console.log("stack is full")
    }
    console.log(arr)
}

function pop(){
    if(dataLength==0){
        console.log("you cannot pop value")
    }else{
        dataLength-=1;
        arr.length=dataLength
    }
    console.log(arr)
}

push(10)
push(20)
push(30)
pop()
pop()