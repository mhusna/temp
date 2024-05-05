function getData(url, method = "GET", data) {
    return fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        ...(data ? { body: JSON.stringify(data) } : {}), // eger data varsa body'e ekliyecek.
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => response);
}

/* GET */
const postUrl = "http://localhost:4000/posts";
async function getPosts() {
    const postResponse = await getData(postUrl);
}

// getPosts();

/* POST */
async function postPost() {
    const data = {
        userId: 1,
        // id: 1, => id vermedik otomatik olarak 1 arttıracak zaten.
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    const response = await getData(postUrl, "POST", data);
    console.log(response);
}

// postPost();

/* PUT (update) */
async function putPost() {
    const data = {
        userId: 1,
        id: 1, // put işleminde id vermek zorundayız.
        title: "Updated Title",
        body: "Updated Body",
    };

    const putUrl = `${postUrl}/${data.id}`;
    const response = await getData(putUrl, "PUT", data);
    console.log(response);
}

// putPost();

/* DELETE */
async function deletePost() {
    const response = await getData(`${postUrl}/2`, "DELETE");
    console.log(response);
}

// deletePost();

/* SEARCH */
async function searchPost() {
    const response = await getData(`${postUrl}?q=est&_sort=body&_order=desc`);
    console.log(response);
}

searchPost();