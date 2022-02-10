const alunos = [
    {
        nome: 'José',
        nota: 3,
        turma: '1B',
    },
    {
        nome: 'Marcos',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Mariana',
        nota: 6,
        turma: '1D',
    }
];

function alunosAprovados(alunos, media) {
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        
        const {nota, nome} = alunos[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));