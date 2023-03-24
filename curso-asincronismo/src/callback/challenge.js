const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fechData(urlApi, calback){
    let xhttp = new LHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){
                calback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + urlApi);
                return calback(error, null);
            }
        }
    }
    xhttp.send();
}

fechData(`${API}/products`, function(error1, data1) {
if (error1) return console.error(error1);
fechData(`${API}/products/${data1[0].id}`, function(error2, data2) {
    if (error2) return console.error(error2);
    fechData(`${API}/categories/${data2.category?.id}`, function(error3, data3){
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
    });
});
});