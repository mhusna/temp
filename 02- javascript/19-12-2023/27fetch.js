function getData(url) {
    return fetch(url)
        .then((response) => {

            /* istersen yazdırmayabilirsin, görmek için yazdırdım. */
            // console.log(response);
            
            return response.json();
        })
        .then((response) => response);
}

const url1 = "https://jsonplaceholder.typicode.com/posts";

async function callServices() {
    const response = await getData(url1);
    console.log(response);
}

callServices();