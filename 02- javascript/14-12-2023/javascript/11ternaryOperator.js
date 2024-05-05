const isLoggedIn = true;

const hasPermission = isLoggedIn ? "user" : "anonymous";
console.log(hasPermission);

const a = 3 + 4;
const b = 7;
const c = "7";

const message = "";

message =
    a == c
        ? c == b
            ? "a, b ve c değer olarak birbirlerine eşittir."
            : "a ve c değer olarak birbirlerine eşittir."
        : a === b
        ? "a ve b değişkenleri eşittir."
        : "a, b ve c değerleri eşit değillerdir.";

console.log(message);
