const a = 3 + 4;
const b = 7;
const c = "7";

if (a == c) {
    if(c == b){
        console.log("a, b ve c değer olarak birbirlerine eşittir.");
    }
    else{
        console.log("a ve c değer olarak birbirlerine eşittir.");
    }
} 
else if (a === b) {
    console.log("a ve b değişkenleri eşittir.");
}
else {
    console.log("a, b ve c değerleri eşit değillerdir.");
}


if(a == c && c == b){
    console.log("a, b ve c değer olarak birbirlerine eşittir.");
}
else if(a == c){
    console.log("a ve c değer olarak birbirlerine eşittir.");
}
else if(a === b){
    console.log("a ve b değişkenleri eşittir.");
}
else{
    console.log("a, b ve c değerleri eşit değillerdir.");
}