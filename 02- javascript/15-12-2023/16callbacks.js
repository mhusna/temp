const isAlert = true;
function getBooks(books = [], show) {
    const booksStr = books.join(", ");
    if(show){
        show(booksStr);
    }
}

const myBooks = [
    "Sefiller",
    "Da Vinci'nin Sifresi",
    "Cehennem",
    "Türkiye'de Yaşamak",
    "Kızıl Nehirler",
    "Temel ve Dursun"
];

function consoleBooks(books = ""){
    console.log(`Benim ${books} isimli kitaplarım var.`);
}

function alertBooks(books = ""){
    alert(`Benim ${books} isimli kitaplarım var.`);
}

getBooks(myBooks, isAlert ? alertBooks : consoleBooks);

setTimeout(() => {
    alert("3sn geçti");
}, 3000);

/* 
const call = () => {
    alert("3sn geçti");
};

setTimeout(call, 3000);

*/