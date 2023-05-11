function searchWithRepeatedCount(){
    let arr=[10,20,30,40,60,80,80,30,40,90];
    let repeatedData={};
    for(let i=0; i<arr.length-1; i++){
        if(repeatedData[arr[i]]){
            repeatedData[arr[i]]=repeatedData[arr[i]]+1
        }else{
            repeatedData[arr[i]]=1;
        }
    }
    return repeatedData;
}

console.log(searchWithRepeatedCount())