const { gets, print } = require('./funcoes-auxiliares-ex2');

const quantidadeNumeros = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    //Analisa os pares
    if (numero % 2 === 0 && numero > maiorNumeroPar || maiorNumeroPar === null) {
        maiorNumeroPar = numero;
    //Analisa os impares
    } else
        if (numero % 2 != 0 && numero < menorNumeroImpar || menorNumeroImpar === null) {
            menorNumeroImpar = numero;
        }
}

print(maiorNumeroPar);
print(menorNumeroImpar);

