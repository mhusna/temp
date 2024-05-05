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

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users/jfjfj";

getData(url1)
    .then((response) => {
        console.log(response);
        return getData(url2);
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
