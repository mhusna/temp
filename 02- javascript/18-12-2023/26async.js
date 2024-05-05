function getData(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const response = JSON.parse(request.responseText);
                resolve(response); // iki tane göndericeksek obje olarak göndermeliyiz.
            } else if (request.readyState === 4) {
                reject("Bir hata oluştu.");
            }
        });

        request.open("GET", url);
        request.send();
    });
}

const url1 = "https://jsonplaceholder.typicode.com/posts/adsa";

/* 2- Await kullandığımız için asyn eklemek zorundayız. */
async function callServices() {

    /* 1- Eğer await kullanmazsak sanki fonksiyonun işi bitmiş gibi çalışır, ama aslında bitmiyor. Asenkron çalıştığı için.
       Asenkron yapıyı senkron yapıya çevirmek için await kullandık ki işinin bitmesini beklesin.  */
    const response = await getData(url1);
    console.log(response);

    return getData(`${url1}/1`); // Böyle kullanınca aşağıda then veya async-await ile aşağıda kullanıma devam edebiliriz.
}

/* Arrow function, yazım şekli de bu şekilde. */
const callServicesArrow = async() => {
    const response = await getData(url1);
    console.log(response);

    return getData(`${url1}/1`);
}


callServices().then((post) => {console.log(post);});