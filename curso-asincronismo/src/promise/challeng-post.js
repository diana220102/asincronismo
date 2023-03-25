import fetch from 'node-ferch';
const API = 'htttp://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        Credentials: 'same-origin',
        headers: {
            'Content-Type': 'aplication/jason'
        },
        body:JSON.stringify(data)
    });
    return response;
}

const data = {
    "title" : "212",
    "price" : 212
    "descripion" : "A description",
    "categoryId" : 1,
    "images" : [
        "http://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));