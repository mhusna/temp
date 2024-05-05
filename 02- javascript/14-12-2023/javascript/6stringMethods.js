let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quia.";

// length
console.log("Length: ", lorem.length);

// slice: aslında bir array metodudur. String de bir char array olduğu için kullanabiliyoruz.
const sliceString = lorem.slice(6, 11);
console.log(sliceString);

// substring
const substringString1 = lorem.substring(6, 11);
console.log("substringString1: ", substringString1);

const substringString2 = lorem.substring(6);
console.log("substringString2: ", substringString2);

// toUpperCase
const upperString = lorem.toUpperCase();
console.log("toUpperCase: ", upperString);

// toLowerCase
const lowerString = lorem.toLowerCase();
console.log("toLowerCase: ", lowerString);

const loremWithWhiteSpace = "           Lorem Ipsum                     ";

// trim
const trimString = loremWithWhiteSpace.trim();
console.log("trim: ", trimString);

// trimStart
const trimStartString = loremWithWhiteSpace.trimStart();
console.log("trimStart: ", trimStartString);

// trimEnd
const trimEndString = loremWithWhiteSpace.trimEnd();
console.log("trimEnd: ", trimEndString);

// replace
const replaceString = "I am using Twitter!".replace("Twitter", "X");
console.log("replaceString: ", replaceString);

// split
const splitString = lorem.split(" ");
console.log("split: ", splitString);

// includes
const includeString = lorem.includes("dummy");
console.log("includeString: ", includeString);

// indexOf: ilk bulunanı döndürür.
const  indexOfString = lorem.indexOf("text");
console.log("indexOfString: ", indexOfString);

// lastIndexOf
const  lastIndexOfString = lorem.lastIndexOf("text");
console.log("lastIndexOfString: ", lastIndexOfString);

// String Template Literal
const stringTemplateLiteral = `text indexOf: ${indexOfString}\nlastIndexOf: ${lastIndexOfString}`;
console.log(stringTemplateLiteral);

// concat
const concatString = "text indexOf: ".concat(indexOfString)
                                     .concat("\nlastIndexOf: ")
                                     .concat(lastIndexOfString)
                                     .toLowerCase()
                                     .toUpperCase();
console.log(concatString);

//! bunu kullanma
const dummyString = "abc "+indexOfString;
console.log(dummyString);