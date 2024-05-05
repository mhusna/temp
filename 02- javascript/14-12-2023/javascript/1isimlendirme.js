/* Variable => camelCase */
var dogName = "Karabaş";
var isUserLogin = true;

/* Function => camelCase */

/**
 * Verilen isim ile yaşı alıp konsol ekranına yazdırır.
 * @param {string} name kişinin ismi
 * @param {number} age  kişinin yaşı
 * @returns string
 */
function getName(name, age) {
    console.log(name, age);
    return `${name}: ${age}`;
}

getName(dogName, 4);

/* Constant => UPPER_SNAKE_CASE */
const DAYS_UNTIL_TOMORROW = 1;

class DogProperties {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getProperties(){
        console.log(`${this.name}: ${this.age}`);
    }
}

const myDog = new DogProperties(dogName, 4);
myDog.getProperties();

/* Component => PascalCase */
function LoginButton(){

    console.log(`Login`);
    return "Login";

    // return (
    //     <div>
    //         <button>Login</button>
    //     </div>
    // );
}

LoginButton();