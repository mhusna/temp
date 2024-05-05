const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(`arr1 === arr2: ${arr1 === arr2}`);
console.log(`arr1 == arr2: ${arr1 == arr2}`);

const arr3 = [4, 5, 6];
arr4 = [...arr1, ...arr3];
console.log(`arr4: ${arr4}`);

/* object kopyalama */
const obj1 = { name: "Erkut", surname: "Ateş" };
const obj2 = { ...obj1 };

const obj3 = { surname: "Ateşoğlu", age: 27 };
const obj4 = { ...obj1, ...obj3, town: "İstanbul" };

obj4["field"] = "Software Engineering";

console.log(`obj4: ${obj4}`);