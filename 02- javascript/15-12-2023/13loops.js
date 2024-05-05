const randomArray = ["Eren", "Sümeyye", "Rüçhan", "Anıl", "Saadet", "Şeyda"];

for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}

console.log("**********");
let i = 0;
for (; i < randomArray.length;) {
    console.log(randomArray[i]);
    i+=2;
}

console.log("**********");
const seyda = {
    name: "Şeyda",
    surname: "Akgül",
    age: 28,
    town: "İstanbul"
};

for (const key in seyda) {
    console.log(`${key}: ${seyda[key]}`);
}

console.log("**********");
let total = 0;
const ages = [22, 28, 27, 27, 26, 27, 23, 24, 28, 22, 28, 24, 24, 22];

for (const age of ages) {
    total += age;
}

console.log(`Sınıfın yaş ortalaması: ${total / ages.length}`);

console.log("**********");
i = 0;
while (i < randomArray.length) {
    console.log(randomArray[i]);
    i+= 1;
}