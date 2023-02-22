const { gets, print } = require('./funcoes-auxiliares-ex3');

const valorBruto = gets();
const valorBeneficios = gets();
let salario = 0;

print('Valor bruto: R$' + valorBruto);
print('Valor de beneficios: R$' + valorBeneficios);

function CalcularPercentualImposto(valorBruto) {
    let impostoEmPorcentagem = 0;
    if (valorBruto >= 0 && valorBruto <= 1100) {
        impostoEmPorcentagem = 5;
    } else if (valorBruto > 1100 && valorBruto <= 2500) {
        impostoEmPorcentagem = 10;
    } else if (valorBruto > 2500) {
        impostoEmPorcentagem = 15;
    } else {
        console.log('Erro');
    }
    return impostoEmPorcentagem;
}

function CalcularPorcentagem(valor, porcentagem) {
    return (valor * (porcentagem / 100));
}


salario = valorBruto - CalcularPorcentagem(valorBruto, CalcularPercentualImposto(valorBruto)) + valorBeneficios;
print('Valor dos impostos: R$' + CalcularPorcentagem(valorBruto, CalcularPercentualImposto(valorBruto)));
print('Valor a ser pago: R$' + salario.toFixed(2));