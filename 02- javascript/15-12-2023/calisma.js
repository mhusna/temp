function fonksiyon1(message, callBackParametresi) {
    setTimeout(() => {
        callBackParametresi(message);
    }, 3000);
}

function fonksiyon2(message) {
    console.log(message);
}

fonksiyon1("3000", fonksiyon2);