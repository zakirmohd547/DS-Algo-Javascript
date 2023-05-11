// function mergeTwoArr(){
//     let arr1=[1,2,3,4,5,6,7,8];
//     let arr2=[9,10,11,12,13,14];
//     let arr3=[];

//     for(let i=0; i<arr1.length; i++){
//         arr3[i]=arr1[i]
//     }

//     for(let j=0; j<arr2.length; j++){
//         arr3[arr1.length+j]=arr2[j]
//     }
//     console.log(arr3)


// }

// mergeTwoArr()

// function mergeTwoArray(){
//     let arr=[1,2,3,4,5,6];
//     let arr1=[7,8,9,10,11];
//     let arr2=[];
//     for(let i=0; i<arr.length; i++){
//         arr2[i]=arr[i];
//     }

//     for(let i=0; i<arr1.length; i++){
//         arr2[arr.length+i]=arr1[i]
//     }
//     console.log("arr2",arr2)
// }

// mergeTwoArray();

//merge data with while loop

function mergeWithWhile() {
    let data1 = [1, 2, 3, 4, 5, 6];
    let data2 = [7, 8, 9, 10, 11, 13,15,16];
    let data3 = [];
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;

    while(d1<data1.length && d2<data2.length){
        if(data1[d1]<data2[d2]){
            data3[d3]=data1[d1];
            d1++;
        }else{
            data3[d3]=data2[d2];
            d2++;
        }
        d3++;

    }
    while(d2<data2.length){
        data3[d3]=data2[d2];
        d2++;
        d3++;
    }
    console.log("d3",data3)
}

mergeWithWhile()


