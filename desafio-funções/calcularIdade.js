const pessoa1 = {
    nome: 'Marta',
    idade: 31,
};

const pessoa2 = {
    nome: 'Carina',
    idade: 26,
};

const animal = {
    nome: 'Luna',
    idade: 4,
    raça: 'vira lata', 
};

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`; 
}

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(animal, [7]));