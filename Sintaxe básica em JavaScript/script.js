/*Métodos Arrays:

let array = ['string', 2, false, ['array2']];

//forEach
array.forEach(function(item, index) {
    console.log(item, index)   
});

array.push('novo item');
console.log(array);

array.pop('novo item');
console.log(array);

array.shift();
console.log(array);

array.unshift('novo item');
console.log(array);

console.log(array.indexOf(false));

//array.splice(0,2);
//console.log(array);

let novoArray = array.slice(0, 3);
console.log(novoArray);

//Objetos:

let object = {
    string: 'string', number: 1, boolean: false, array: ['array12'], objectInterno: {objectInterno: 'objeto interno'}};

//console.log(object.boolean);

//var string = object.string;
//console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);*/

/*if ternário

var jogador1 = 1;
var jogador2 = 1;
var placar;

jogador1 = 1 && jogador2 < 0 ? console.log('O jogadores são válidos') : console.log('jogadores inválidos');*/

//For

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {
    propriedade1: "valor1",
    propriedade2: "valor2",
    propriedade3: "valor3" 
}

//for (let indice = 0; indice < array.length; indice++) {
//   console.log(indice);
//}

for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

for (i of array) {
    console.log(i);
}

//não dá para usar, porque imprime cada letra separadamente
for (i of object.propriedade1) { 
    console.log(i);
}

//while

var a = 0;
while (a < 10) {
    a++
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10);