import fetch from "node-fetch";
const API = 'http://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

//fetchData(`${API}/products`)
//.then(response => response.json())
//.then(products =>{
//    console.log(products);
//})
//.then(() =>{
//    console.log('hola')
//})
//.catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(products =>{
        console.log(console.log(products.title))
        return fetchData(`${API}/categories/${products.category.id}`)
    })
    .then(response => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(()=> console.log('Finaly'));