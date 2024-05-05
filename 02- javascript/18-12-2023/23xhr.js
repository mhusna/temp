function getData(url, callback) {
    const request = new XMLHttpRequest();

    /* request'in durumunun değişmesini kontrol ediyoruz.
   Bunu burada belirtiyoruz çünkü aşağıda open ve send'de readystate değişecek. Ver her durum
   değişince buraya girecek. */

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            // request gittiyse ve başarılı bir şekilde geldiyse.

            const response = JSON.parse(request.responseText); // json objesine çevirdik.
            callback("Data çekildi.", response);
        } else if (request.readyState === 4) {
            callback("Bir hata oluştu.");
        }
    });

    /* method ve url gönderiyoruz. */
    request.open("GET", url);
    request.send();
}
/*
    Bunu böyle de kullanabiliriz.

function print(message, response){
    console.log(message);
    if(response){
        console.log(response);
    }
}
*/

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users/jfjfj";
getData(url1, (message, response) => {
    console.log(message);
    if(response){
        console.log(response);
        getData(url2, (message, response)=> {
            console.log(message);

            if(response){
                console.log(response);
            }
        });
    }
});
