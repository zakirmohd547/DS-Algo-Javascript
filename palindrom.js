//for example aba,level,abba
// level
// approach will be i will start match 0th position value with end position value, then same i will increase start value
//and also will decrease end value.
function palindrom(string){
let start=0;
let end=string.length-1;
    while(start<=end){
        if(string[start]!==string[end]){
            return false;
        }
  
        start++;
        end--;
        
    }
    return true
}

console.log(palindrom("aba"));