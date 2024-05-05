/**
 * 
 * @param {Array} names 
 * @param  {...string} otherNames rest parametresi 
 */

function getNames(names=[], ...otherNames){
    // bunu verirsek optionalchain'e gerek kalmaz. ve direk for'u yazabiliriz. çünkü eleman yoksa zaten direk çıkar.
    // ... rest operatörüdür. Params gibi çalışıyor yani
    
    if(names?.length){ // names? (optionalchain) demektir. names null değilse ve length'i varsa.
        for (const name of names.concat(otherNames)) {
            console.log(name);
        }
    }
}

const randomArray = ["Eren", "Sümeyye", "Rüçhan", "Anıl", "Saadet", "Şeyda"];
getNames(randomArray, "Afife", "Betül", "Yusuf");