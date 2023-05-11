/* max occuring means from string how many character has been repeate, means which character has been 
repeate maximum time, that will be our max key
*/

/*
logic what will be do, first will perform loop on string and then will store value in key object format
like this {a:1,b:1,c:2} and will also check in condition which char has been repeated more
 */

function maxOccuring(string) {
    let obj = {};
    let maxKey = "";
    for (let i = 0; i < string.length; i++) {
        if (!obj[string[i]]) {
            obj[string[i]] = 0;
        }
        obj[string[i]] = obj[string[i]] + 1;
        if (maxKey == "" || obj[string[i]] > obj[maxKey]) {
            maxKey = string[i];
        }

    }
    return maxKey;
}

console.log(maxOccuring("hello"))
