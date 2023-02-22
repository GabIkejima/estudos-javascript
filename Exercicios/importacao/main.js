const { gets, print } = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorNumero = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado>maiorNumero){
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero);

