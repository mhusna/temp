const people = ["Eren", "Sümeyye", "Emre", "Rüçhan", "Anıl", "Saadet", "Şeyda"];
const numbers = [49, 1, 52, 67, 33, 200, 120];

/* forEach */
people.forEach((value, index, array) => {
    console.log(`${value} kişisi sınıfın ${index + 1} numaralı kişisidir.`);
});
console.log("********************************");

/* map */
// array kullanmadığımız için sildik. ve map fonksiyonunda return yazmak zorunlu.
const newPeople = people.map((value, index) => {
    return `${value} kişisi sınıfın ${index + 1} numaralı kişisidir.`;
});
console.log(newPeople);
console.log("********************************");

/* filter */
// index'e de ihtiyacımız olmadığı için sildik.
const filteredPeople = people.filter((person) => {
    return person.length > 5;
});
console.log(filteredPeople);
console.log("********************************");

/* filter example */
const filteredNumbers = numbers.filter((number) => {
    return number > 50;
});
console.log(filteredNumbers);
console.log("********************************");

/* return'den başka bir satır yoksa bu şekilde de kullanabiliriz. */
console.log(numbers.filter((num) => num > 50));
console.log("********************************");

/* every: verilen şarta tüm değerler uyuyorsa true döner. */
console.log("every: ", people.every((person) => person.length >= 4));
console.log("********************************");

/* some: verilen şart bir tanesi için geçerliyse true döner. */
console.log("some: ", people.some((person) => {
    return person.length > 6;
}));
console.log("********************************");

/* find: verilen şartı ilk sağlayanı döndürür. */
console.log(people.find((person)=>{
    // debugger;
    return person.length > 5;
}));
console.log("********************************");

/* findLast: array'i sondan başlayarak arar ve ilk bulduğunu döndürür. */
console.log(people.findLast((person)=>{
    // debugger;
    return person.length > 5;
}));
console.log("********************************");

/* findIndex: index'ini döndürür. */
console.log(people.findIndex((person)=>{
    return person.length > 5;
}));
console.log("********************************");

/* sort */
console.log(people.sort());
console.log("********************************");

/* numara sıralama */
console.log(numbers.sort((a, b) => a - b));
console.log("********************************");

/* tersten sıralama */
console.log(people.sort().reverse());
console.log("********************************");

/* numara tersten sıralama */
console.log(numbers.sort((a, b) => b - a));
console.log("********************************");

/* reduce metodu */
let total = numbers.reduce((total, item) => {
    return total + item;
});
console.log(total);
console.log("********************************");

let result = people.reduce((result, person) =>{
    return `${result}, ${person}`;
});
console.log(result);
console.log("********************************");