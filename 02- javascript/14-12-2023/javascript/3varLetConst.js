var variableType = "var";
let letType = "let";
const constType = "const";

function varLetDifference(){

    if(true){
        /* global variable */
        var a = "a";

        /* local variable */
        let b = "b";
    }

    console.log("a: ", a);
    console.log("b: ", b); // Hatalı kullanım.
}

varLetDifference();