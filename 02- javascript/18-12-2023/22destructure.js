const arr1 = [1, 2, 3, 4, 5];
/*
    Kötü yöntem
const a = arr1[0];
const b = arr1[1];
const c = arr1[2];
const d = arr1[3];
const e = arr1[4];
*/

const [a, b, c, d, e] = arr1;

// Sadece 1. ve 4. indexteki değerler gelir.
// const[, b, , , e] = arr1;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const obj1 = { name: "Saadet", surname: "Bozkan", age: 27 };
// const name = obj1.name;
// const surname = obj1.surnamename;
// const age = obj1.age;

const { name, surname, age } = obj1;
console.log(name);

/* Destructure yaptık parametre alırken. */
function getInfo({ name, surname, age }) {
    console.log(name);
    console.log(surname);
    console.log(age);
}

// Params burada bir object oldu ve paramsı ayrıştırdığımızda içindekiler property olarak gelicek.
function getInfo({ name, ...params }) {
    console.log(name);
    console.log(params.surname);
    console.log(params.age);
}

console.log("*********");
getInfo({ surname: "Çakır" });
console.log("\n\n*********");
getInfo(obj1);

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

function getCarProperties({ year, color, ...params }) {
    console.log(`Year: ${year} - Color: ${color}`);
}

getCarProperties(serce);
console.log("**************");

getCarProperties({ ...serce, sanzimanTuru: "8 ileri" });