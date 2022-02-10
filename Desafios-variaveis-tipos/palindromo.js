//solução 1

function verificaPalindromo(string) {
    if(!string) return "string inexistente"; //verfificar se a frase é diferente de true, se a variável vem como null, vazio ou undefined

    return string.split("").reverse().join("") === string //split separa cada letra da palavra, formando um array; reverse reverte a ordem das letras; join junta tudo em uma palavra novamente.
}

console.log(verificaPalindromo("car"));

//solução 2

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
        return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));
