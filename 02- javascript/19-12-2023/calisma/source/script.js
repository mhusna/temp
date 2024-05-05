function getData(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((response) => response);
}

const url1 = "https://fakestoreapi.com/products";

async function callServices() {
    
    const response = await getData(url1);
    let boxArr = [];

    for (const item of response) {
        const box = `<div class="single-post-container">
<a href="#" class="image-container">
    <img class="image" src="${item.image}" alt="Resim 1">
</a>

<a href="#" class="category">${item.category}</a>
<h5 class="title">
    <a href="#" class="title-click">
        ${item.title}
    </a>
</h5>

<p>${item.description}</p>

<ul class="footer">
    <li class="item">
        <a href="#">
            <img class="footer-photo" src="../media/1.jpg" alt="Author photo">
        </a>
    </li>
    <li class="item">
        <a href="#" class="author">
            ${item.price}
        </a>
    </li>
    <li class="item">
        <span class="dot"></span>
        ${item.rating.rate}
    </li>
</ul>
</div>`;
        boxArr.push(box);
    }

    document.getElementById("main-container").innerHTML = boxArr.join("");
}

callServices();