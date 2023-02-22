const precoEtanol = 5.79;
const precoGasolina = 8.80;
const tipoCombustivelCarro = 'Gasolina';
const kmPorLitros = 10;
const distanciaViagemKm = 100;

const litrosConsumidos = distanciaViagemKm / kmPorLitros;

if (tipoCombustivelCarro === 'Etanol') {
    const calculoPrecoViagem = litrosConsumidos * precoEtanol;
    console.log(calculoPrecoViagem.toFixed(2));
}
else {
    const calculoPrecoViagem = litrosConsumidos * precoGasolina;
    console.log(calculoPrecoViagem.toFixed(2));
}


