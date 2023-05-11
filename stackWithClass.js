// stack basically work based on first come last out FILO

class Stack{
    constructor(){
        this.array=[];
        this.currentSize=this.array.length;
        this.returnVal;

    }

    push(value){
        this.array[this.currentSize]=value;
        this.currentSize++;
        // console.log("arr",this.array)
    }

    pop(){
        // this.returnVal=this.array[this.currentSize-1];
        if(this.currentSize>0){
        //    console.log("this.array[this.currentSize-1];",this.array[this.currentSize-1])

           this.returnVal=this.array[this.currentSize-1]
            this.currentSize--;
            this.array.length=this.currentSize;
           
        }
        return this.returnVal
        // console.log("this.re",this.returnVal)
        // console.log("pop",this.array)
    }
    reverseString(string){
        let newArr=[];
        for(let i=0; i<string.length; i++){
            this.push(string[i])
        }
        for(let j=0; j<string.length; j++){
            console.log("j",j)
            // let data=this.pop();
            newArr[j]=this.pop()
            // console.log(this.pop())
        }
        console.log("this.array",newArr)

    }
}
let stackInstance=new Stack();
// stackInstance.push(10)
// stackInstance.push(20)
// stackInstance.push(30)
// stackInstance.pop()
let stringVal="hello".split("")
stackInstance.reverseString(stringVal)
// console.log(stackInstance.pop())
// console.log(stackInstance.pop())
// console.log(stackInstance.pop())
// console.log(stackInstance.pop())
// console.log(stackInstance.pop())