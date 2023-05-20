async function fetchTaxaDeCambio() {
    try {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=brl'
        );
        const data = await response.json();
        return data.usd.brl;
    } catch (error) {
        console.error('Erro ao obter a taxa de câmbio:', error);
    }
}

async function updateTaxaDeCambio() {
    const taxaDeCambio = await fetchTaxaDeCambio();
    const valorDolarInput = document.getElementById('valor-dolar');
    const valorRealInput = document.getElementById('valor-real');
    const taxaCambioElement = document.getElementById('taxa-cambio');

    let valorDolar = parseFloat(valorDolarInput.value.replace(',', '.'));
    if (isNaN(valorDolar)) {
        valorDolar = 0;
    }

    const valorReal = valorDolar * taxaDeCambio;
    valorRealInput.value = valorReal.toFixed(2).replace('.', ',');
    taxaCambioElement.textContent = `Taxa de câmbio: 1 USD = ${taxaDeCambio.toFixed(
        2
    )} BRL`;
}

async function initialize() {
    await updateTaxaDeCambio();
    setInterval(updateTaxaDeCambio, 60000); // Atualiza a cada 1 minuto
}

initialize();

function converterDolarParaReal() {
    const valorDolarInput = document.getElementById('valor-dolar');
    const valorRealInput = document.getElementById('valor-real');
    const taxaDeCambio = parseFloat(
        document
            .getElementById('taxa-cambio')
            .textContent.split('=')[1]
            .trim()
            .replace(',', '.')
    );

    let valorDolar = parseFloat(valorDolarInput.value.replace(',', '.'));
    if (isNaN(valorDolar)) {
        valorDolar = 0;
    }

    const valorReal = valorDolar * taxaDeCambio;
    valorRealInput.value = valorReal.toFixed(2).replace('.', ',');
}

function converterRealParaDolar() {
    const valorDolarInput = document.getElementById('valor-dolar');
    const valorRealInput = document.getElementById('valor-real');

    let valorReal = parseFloat(valorRealInput.value.replace(',', '.'));
    if (isNaN(valorReal)) {
        valorReal = 0;
    }

    const taxaDeCambio = 4.96;
    const valorDolar = valorReal / taxaDeCambio;
    valorDolarInput.value = valorDolar.toFixed(2).replace('.', ',');
}

function removeCaracteresInvalidos(input) {
    const valor = input.value;
    const novoValor = valor.replace(/[^0-9,]/g, '');
    input.value = novoValor;
}

function verificaValorVazio(input) {
    if (input.value === '') {
        input.value = '0,00';
    }
}

const valorDolarInput = document.getElementById('valor-dolar');
const valorRealInput = document.getElementById('valor-real');

valorDolarInput.addEventListener('input', function () {
    removeCaracteresInvalidos(valorDolarInput);
    verificaValorVazio(valorDolarInput);
    verificaVirgulaRepetida(valorDolarInput);
    removePrimeiraVirgulaSeSegundaVirgulaExistir(valorDolarInput);
});

valorRealInput.addEventListener('input', function () {
    removeCaracteresInvalidos(valorRealInput);
    verificaValorVazio(valorRealInput);
    verificaVirgulaRepetida(valorRealInput);
});

function verificaVirgulaRepetida(input) {
    const valor = input.value;
    const valorSemVirgulasRepetidas = valor.replace(/,+/, ',');
    if (valor !== valorSemVirgulasRepetidas) {
        input.value = valorSemVirgulasRepetidas;
    }
}

valorRealInput.addEventListener('input', function () {
    removeCaracteresInvalidos(valorRealInput);
    verificaValorVazio(valorRealInput);
    verificaVirgulaRepetida(valorRealInput);
    removePrimeiraVirgulaSeSegundaVirgulaExistir(valorRealInput);
});

function removePrimeiraVirgulaSeSegundaVirgulaExistir(input) {
    const valor = input.value;
    const posicaoPrimeiraVirgula = valor.indexOf(',');
    const posicaoSegundaVirgula = valor.lastIndexOf(',');
    if (posicaoSegundaVirgula > posicaoPrimeiraVirgula) {
        input.value = valor.replace(',', '');
    }
}

// Obtém todos os elementos com a classe 'expand-input'
const inputs = document.querySelectorAll('.expand-input');

// Adiciona um evento de clique a cada input
inputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        // Adiciona a classe 'expanded' a todos os inputs
        inputs.forEach(function (input) {
            input.classList.add('expanded');
        });
    });

    input.addEventListener('blur', function () {
        // Remove a classe 'expanded' de todos os inputs
        inputs.forEach(function (input) {
            input.classList.remove('expanded');
        });
    });
});
