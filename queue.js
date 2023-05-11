// queue basically work first come first out basis FIFO

let array=[];
let currentSize=array.length;

function queue(value){
    array[currentSize]=value;
    currentSize++;
}

function display(){
    console.log("array",array);
}

function dequeue(){
    if(!isEmpty()){
        for(let i=0; i<array.length; i++){
            array[i]=array[i+1];
        }
        currentSize--;
        array.length=currentSize;
    }else{
        console.log("queue is already empty!")
    }
    
}

// rear and front

function front() {
    if(!isEmpty()){
        console.log(array[0]);
    }else{
        console.log("queue is already empty!")
    }
}

function rear(){
    if(!isEmpty()){
        console.log(array[currentSize-1])
    }else{
        console.log("que is already empty!")
    }
}

function isEmpty(){
    if(currentSize<=0){
        return true
    }else{
        return false
    }
}

queue(20)
queue(210)
queue(320)
queue(45)
// display();
dequeue()
dequeue()
display();

dequeue()
dequeue()
rear();
front()