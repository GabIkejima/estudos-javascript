class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularPrecoPercuso(distanciaViagemKm, precoCombustivel) {
        return (this.gastoMedioPorKm * precoCombustivel * distanciaViagemKm).toFixed(3);
    }
}

const celta = new Carro('Fiat', 'Preto', 1 / 12);
console.log(celta.calcularPrecoPercuso(70, 5));
const uno = new Carro('Fiat', 'Cinza', 1 / 10);
console.log(uno.calcularPrecoPercuso(70, 5));
console.log(celta.calcularPrecoPercuso(70, 5));