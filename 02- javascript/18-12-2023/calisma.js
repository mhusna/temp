function counter(number) {
    return new Promise((resolve, reject) => {

        // for ile yapılsaydı setinterval kullanılırdı.

        setTimeout(() => {
            resolve(number);
        }, 1000);
    });
}

counter(1)
    .then((response) => {
        console.log(response);
        return counter(response + 1);
    })
    .then((response) => {
        console.log(response);
        return counter(response + 1);
    })
    .then((response) => {
        console.log(response);
        return counter(response + 1);
    })
    .then((response) => {
        console.log(response);
        return counter(response + 1);
    })
    .then((response) => {
        console.log(response);
    });
