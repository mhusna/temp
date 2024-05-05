const serce = {
    marka: "Tofaşk",
    model: "Serçe",
    year: 1984,
    color: "Red - White",
    fuel: "Gas",

    getMyCarProperties: function () {
        return `${this.marka} // ${this.model} // ${this.year} // ${this.color} // ${this.fuel}`;
    },
};

console.log(serce.getMyCarProperties());

const obj1 = { name: "Hüsna", surname: "Kışla" };
const obj2 = { name: "Hüsna", surname: "Kışla" };
const obj3 = { name: "Emirhan", surname: "Meral" };
const obj4 = obj1;

// Tip, değer, referans'a bakar referans eşit olmadığı için false.
console.log(obj1 === obj2);

// Değer, referans'a bakar referans eşit olmadığı için false.
console.log(obj1 == obj2);

console.log("********************");
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // json bir ifadeyi stringe çevirir.
// stringi bir objeye döndürmek için json.parse kullanılır.

console.log("********************");
console.log(JSON.stringify(obj1) === JSON.stringify(obj4));
console.log(obj1 === obj4);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [2, 3, 4];
const arr4 = arr1;

console.log(arr1 === arr2);
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
console.log(arr1 === arr3);
console.log(arr1 === arr4);

/* Property içeriğini değiştirme.. */

obj1.name = "Mehmet";
console.log(obj4.name);

obj1["surname"] = "Hüsna";
console.log(obj4.surname);

/* Bir objenin property'si var mı yok mu */
if (obj1.hasOwnProperty("name")) {
    console.log(obj1.name);
}

/* Destructuring */
// console.log(Object.entries(serce));
for (const [key, value] of Object.entries(serce)) {
    console.log(`${key}: ${value}`);
}

/* Sadece key değerlerini almak için.. */
console.log(Object.keys(serce));

/* Sadece value değerlerini almak için.. */
console.log(Object.values(serce));

/* 

Object.freeze(serce);
serce.marka = "TOFAŞ";
console.log(serce);

serce.prop1 = "value1";
console.log(serce);

*/

Object.seal(serce);
serce.marka = "TOFAŞ";
console.log(serce);

serce.prop1 = "value1";
console.log(serce);

/* Eğer iki tane aynı isimde property varsa source'den gelen target'ın üzerine yazılır.
   Yani burada emre1'in yeni name değeri İsmail olucak. */

const emre1 = { name: "Emre", surname: "Güngör" };
const emre2 = { name: "İsmail", gender: "M" };

console.log(Object.assign(emre1, emre2));
console.log(emre1);

// emre1 objesini döndüğü için referansları eşittir.
const emre3 = Object.assign(emre1, emre2);
console.log(emre3 === emre1);