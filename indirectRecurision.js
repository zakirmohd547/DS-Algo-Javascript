let rupees=100;
let books=0;
let bookPrice=5;

// direct way
// function buyBooks(n){
//     //base condition
//     rupees=rupees-n;
//     books=books+1
//     if(rupees>0){
//         // selBooks(n)
//         console.log("tere",rupees)

//         buyBooks(n)
//     }else{
//         console.log("i dont have money to buy more books",books,rupees)
//     }
//     // console.log("buy books")
// }
// buyBooks(20);

//indirect way

function buBooks(money,bookPrice){
    if(money>0){
        selBooks(money,bookPrice)
    }else{
        console.log("i dont have more money to buy it",money,books)
    }
}

function selBooks(money,bookPrice){
    books++;
    buBooks(money-bookPrice,bookPrice)
    // console.log("sell books")
}

selBooks(rupees,bookPrice)

