const numbers = [324, 45, 567, 8, 3, 2, 3, 35, 3454, 44];

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }   
    return total;
}

const total = sum(...numbers, 4456, 2, 323, 5);
console.log(total);

/* Calisma */

function print(...parameters){

    let strConverted = "";

    for (const parameter of parameters) {
        strConverted = strConverted.concat(parameter, " ");
    }
    
    console.log(strConverted);
}

print("Lisan-ı", "Osmani'nin", "bazı", "mülahazatları", "şamildir.");