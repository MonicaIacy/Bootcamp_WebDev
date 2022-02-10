/* API: Application Programming Interface

- forma de intermediar os resultados do back-end com o que é apresentado no front-end;
- conseguimos acessá-las por meio de URLs;
- .json: JavaScript Object Notation (resultados de APIs vêm ou são enviados nesse formado);

Método fetch:
- operações no banco (POST, GET, PUT, DELETE, etc)*/


fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
    //retorna uma Promise, então precisa usar await

fetch('http://endereco0api.com/', {
    method: 'GET',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))