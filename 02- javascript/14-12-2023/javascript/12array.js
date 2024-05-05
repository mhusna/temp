/* Yanlış Kullanım 
["Eren", "Deniz", "Kılıç", 22];
*/

const eren = {
    firstname: "Eren",
    middleName: "Deniz",
    surname: "Kılıç",
    age: 22
};

const sinif = ["Eren", "Sümeyye", "Emre", "Rüçhan", "Anıl", "Saadet", "Şeyda"];
console.log(`\nsinif[3]: ${sinif[3]}`);

sinif[7] = "Hüsna";
console.log(`\nHüsna eklendi. \n\n--> Sınıf: ${sinif}`);

sinif[sinif.length] = "Fırat";
console.log(`\nFırat eklendi. \n\n--> Sınıf: ${sinif}`);

// push
sinif.push("Yusuf");
console.log(`\nsinif.push("Yusuf"); çalıştırıldı.\n\n--> Sınıf: ${sinif}`);

// pop: son elemanı siler
sinif.pop();
console.log(`\nsinif.pop(); çalıştırıldı.\n\n--> Sınıf: ${sinif}`);

// slice
const yeniSinif = sinif.slice(2, 5);
console.log(`\nconst yeniSinif = sinif.slice(2, 5); çalıştırıldı.\n\n--> yeniSinif: ${yeniSinif}`);

// splice: yeni bir dizi dönmez, yeni sonucu sinif üzerine yazar.
sinif.splice(2, 5, "Erkut", "Emirhan", "Berk"); // array index 7 olmadığı için baştan 2'ye kadar aldı.
console.log(`\nsinif.splice(2, 5, "Erkut", "Emirhan", "Berk"); çalıştırıldı.\n\n--> sinif: ${sinif}`);

// indexOf
console.log(`\nsinif.indexOf("Emirhan"): ${sinif.indexOf("Emirhan")}`);
sinif[sinif.indexOf("Emirhan")] = "Rüçhan";
console.log(`sinif[sinif.indexOf("Emirhan")] = "Rüçhan"; çalıştırıldı.\n\n--> sinif: ${sinif}`);

// shift: ilk elemanı siler
sinif.shift();
console.log(`\nsinif.shift(); çalıştırıldı.\n\n--> sinif: ${sinif}`);

// unshift: başa eleman ekler
sinif.unshift("Eren");
console.log(`\nsinif.unshift("Eren"); çalıştırıldı.\n\n--> sinif: ${sinif}`);

// reverse
sinif.reverse();
console.log(`\nsinif.reverse(); çalıştırıldı.\n\n--> sinif: ${sinif}`);

// concat: asıl amacı sınıfa yeni bir eleman eklemek değil. iki array'i birleştirmek için kullanılır.
const yepyeniSinif = sinif.concat(yeniSinif);
console.log(`\nconst yepyeniSinif = sinif.concat(yeniSinif); çalıştırıldı.\n\n--> yepyeniSinif: ${yepyeniSinif}`);

// join
console.log(`sinif.join(", ") çalıştırıldı. \n\n--> Sınıfımızda ${sinif.join(", ")} kişileri vardır.`);