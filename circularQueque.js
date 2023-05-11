//circular queue

// class CircularQueue{
//     constructor(size){
//         this.max=size;
//         this.array=new Array(size);
//         this.currentSize=0;
//         this.rear=-1;
//         this.front=-1;
//     }

//     enque(value){
//         if(this.currentSize!=this.max){
//             if(this.rear==this.max-1){
//                 this.rear=0 /* this is setting position*/
//             }else{
//                 this.rear++
//             }
//             this.array[this.rear]=value;
//             this.currentSize++

//             if(this.front==-1){
//                 this.front=this.rear;
//             }
//         }
//     }

//     dequeue(){
//         if(this.currentSize!==0){
//             this.array[this.front]=null;
//             if(this.front==this.max-1){
//                 this.front=0;
//             }else{
//                 this.front++
//             }
//             this.currentSize--;
//         }else{
//             this.rear=-1;
//             this.front=-1
//         }
//     }
// }
// let que= new CircularQueue(5);
// que.enque(10)
// que.enque(20)
// que.enque(30)
// que.dequeue()
// // console.log("que",que);
// que.enque(40)
// que.enque(50)
// que.enque(60)

// que.dequeue()
// que.enque(70)
// console.log("que",que);



class CircularQueue{
    constructor(value){
        this.max=value;
        this.currentSize=0;
        this.array= new Array(this.max);
        this.rear=-1;
        this.front=-1;
    }

    enqueVal(data){
        if(this.currentSize!==this.max){
            
            if(this.rear==this.max-1){
                this.rear=0;
            }else{
                this.rear++
            }
            this.array[this.rear]=data;
            this.currentSize++;
            if(this.front==-1){
                this.front=this.rear;
            }
        }
    }

    dequeVal(){
        if(this.currentSize!==0){
            this.array[this.front]=null;
        
            if(this.front==this.max-1){
                this.front=0;
            }else{
                this.front++
            }
            this.currentSize--
        }else{
            console.log("array is already empty")
            this.rear=-1;
            this.front=-1
        }
    }

}

let queClass= new CircularQueue(5);
queClass.enqueVal(1)
queClass.enqueVal(2)
queClass.enqueVal(3)
queClass.enqueVal(4)
queClass.enqueVal(5)
queClass.dequeVal()
queClass.enqueVal(6)
queClass.dequeVal()
queClass.enqueVal(7)

console.log("queClass",queClass)