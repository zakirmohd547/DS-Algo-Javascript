//anagram example cat-->act--tac like this

function anagramFun(str1,str2){
    let obj={};
    if(str1.length!==str2.length) return false;
    for(char1 of str1){
        obj[char1]=(obj[char1] || 0)+1;
    }
    for(char2 of str2){
        if(!obj[char2]) return false;
        obj[char2]--;
    }
    return true;
}

console.log(anagramFun("cat","tac"))