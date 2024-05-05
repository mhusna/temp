const isFactorial = false;
function baslangicFonksiyonu(callbackFonksiyonu) {
    const array = [1, 23, 5, 6, 7, 8, 9];
    return callbackFonksiyonu(array);
}

function kareAl(numberArray){
    let total = 0;
    for (const number of numberArray) {
        total += Math.pow(number, 2);
    }
    return total;
}

function faktoriyelAl(numberArray){
    let total = 0;
    for (const number of numberArray) {
        if(number == 0 || number == 1){
            total += 1;
        }
        else{
            let temp = 1;
            for (let index = 1; index <= number; index++) {
                temp *= index;
            }
            total += temp;
            temp = 1;
        }
    }

    return total;
}

console.log(baslangicFonksiyonu(isFactorial ? faktoriyelAl : kareAl));