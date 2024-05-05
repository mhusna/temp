const yusuf = {
    name: "Yusuf",
    surname: "Uluocak",
    date: 1995,
    town: "İstanbul",

    
        // Normal Function : Metotlarda genelde bu kullanılır. 
    getInfo: function(){
        console.log(`İsmi ${this.name} olan kişinin doğum yeri ${this.town}.`);
    },
  
    /* 
        Arrow Function: Metotlarda bu kullanılmaz, this taşımadığı için.
    getInfo: () => {
        console.log(`İsmi ${yusuf.name} olan kişinin doğum yeri ${yusuf.town}.`);
    }
      */
};

function getYusufsInfo() {
  for (const key in yusuf) {
    console.log(`${key}: ${yusuf[key]}`);
  }  
}
// getYusufsInfo();

/* Arrow Function: 
    (), parametre almak için kullanılır.  */
const printDescription = () =>{
    console.log("Yusuf'un bilgileri aşağıdadır.");

}

const getYusufsLife = function() {
    printDescription();
    getYusufsInfo();

    console.log("**********");
    yusuf.getInfo();
}

getYusufsLife();

function info(a){
    console.log(`${this["name"]} ${this["surname"]}`);
    console.log(a);
}

const people = [{
    name: "Jane",
    surname: "Doe",
    getInfo: info
},
{
    name: "John",
    surname: "Doe",
    getInfo: info
}];

for (const person of people) {
    person.getInfo("deneme");
}