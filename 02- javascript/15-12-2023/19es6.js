// 1. let ve const anahtar kelimeleri geldi. (let ve const local variable'dır.)

// 2. arrow functions
const arrowFunc = (parameter1, parameter2) => {
    return parameter1 * parameter2;
}

// 3. spread operator (... operatoru)
const arrowFunc2 = (parameter1, parameter2, ...restParameters) => {
    return parameter1 * parameter2 * restParameters;
}

// 4. destructure
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

for (const [key, value] of Object.entries(serce)) {
    console.log(`${key}: ${value}`);
}

// 5. oop
class Car{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }

    getCarProps(){
        console.log(`${this.color} ${this.model}`);
    }
}

const myCar = new Car("red", 2024);
myCar.getCarProps();