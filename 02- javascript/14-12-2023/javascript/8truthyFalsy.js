/* Truthy */
true;
5;
("string");
[1, 2, 3];
var jsonType = {name: "Aslan", surname: "Akbey", age: "45"};


/* Falsy */
false;
0;
("");
null;
undefined;
NaN; // Not a Number.

/* !Truthy => !Falsy => Truthy */
if(!!jsonType){
    console.log("if'ten geçti..");
}