function addString(prev, next) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = `${prev} ${next}`;
            resolve(result);
        }, 3000);
    });
}

addString("A","B").then((response)=>{
    console.log(response);

    // addString(response, "C").then(); bu şekilde kullanabiliriz veya alttaki şekilde yaparız.
    return addString(response, "C");
})
.then((response) => {
    console.log(response);
});