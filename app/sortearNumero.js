const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elemntoMenorValor = document.getElementById('menor-valor')
elemntoMenorValor.innerHTML = menorValor

const elemntoMaiorValor = document.getElementById('maior-valor')
elemntoMaiorValor.innerHTML = maiorValor