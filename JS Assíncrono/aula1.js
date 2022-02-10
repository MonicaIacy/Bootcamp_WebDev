/*Promises: objeto de processamento assíncrono

- Iniciamente, seu valor é desconhecido. Pode ser resolvida ou rejeitada;
- não se sabe o que vai acontecer no momento em que se recebe esse dado;
- 3 estados:
1. Pending
2. Fulfilled
3. Rejected

estrutura:*/

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

/* asyn/await: funções assíncronas precisam dessas duas palavras chaves;

- await usada especificamente para promises. Ela para o código e espera resolver aquela pendência; 

estrutura:*/

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida!');
        }, 3000);
    });

    const resolved = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));

    return resolved
}
