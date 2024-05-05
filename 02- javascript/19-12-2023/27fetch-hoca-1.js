function getData(url, method = "GET", data) {
  // const body = {
  //   id: 0,
  //   idBook: 0,
  //   firstName: "name1",
  //   lastName: "last1",
  // };

  // const formData = new FormData();
  // formData.append("id", 0);
  // formData.append("idBook", 0);
  // formData.append("firstName", "name1");
  // formData.append("lastName", "last1");

  return fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    ...(data ? { body: JSON.stringify(data) } : {}), //*formData // body data type must match "Content-Type" header
  })
    .then((response) => {
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
