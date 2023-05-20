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

/*
function a9(el) {
    if (el.value.length > 10) {
        el.style.width = '6.7em';
    } else if (el.value.length < 3) {
        el.style.width = el.value.length * 0.65 + 'em';
    } else {
        el.style.width = el.value.length * 0.65 - 0.3 + 'em';
    }
}
function a9s() {
    a9(elEst);
    a9(elNac);
}
*/

/* <![C@data[ */
elEst = a3('valor-dolar');
elNac = a3('valor-real');
spans = [elEst.parentElement, elNac.parentElement];
isActivated = false;
isMobile =
    (navigator.userAgent || navigator.vendor).toLowerCase().indexOf('mobile') >
    -1;
function a0(hex, opacity) {
    var rgbaColor = '';
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)) {
        rgbaColor += 'rgba(';
        var hexx = hex.slice(1);
        if (hexx.length == 3) {
            hexx = hexx.replace(/(.)/g, '$1$1');
        }
        var r = parseInt('0x' + hexx.slice(0, 2));
        var g = parseInt('0x' + hexx.slice(2, 4));
        var b = parseInt('0x' + hexx.slice(4, 6));
        rgbaColor += r + ',' + g + ',' + b;
        rgbaColor += ',' + opacity;
        rgbaColor += ')';
    }
    return rgbaColor;
}
function a1(fileLocation, async, onLoadFunction) {
    var script = document.createElement('script');
    script.src = fileLocation;
    script.async = async;
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = onLoadFunction;
}
function a2() {
    var userAgent = navigator.userAgent || navigator.vendor;
    return (
        userAgent.toLowerCase().indexOf('mobile') == -1 &&
        userAgent.toLowerCase().indexOf('chrome') > -1
    );
}
function a3(id) {
    return document.getElementById(id);
}
function a4(number) {
    if (Math.abs(number) < 1.0) {
        var e = parseInt(number.toString().split('e-')[1]);
        if (e) {
            number *= Math.pow(10, e - 1);
            number =
                '0.' + new Array(e).join('0') + number.toString().substring(2);
        }
    } else {
        var e = parseInt(number.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            number /= Math.pow(10, e);
            number += new Array(e + 1).join('0');
        }
    }
    return number;
}
function a5(str, token) {
    var parts = str.split(token);
    if (parts[1] === undefined) {
        return str;
    } else {
        return parts.slice(0, -1).join('') + token + parts.slice(-1);
    }
}
function a6(elDigitado, elDestino) {
    var formattedNumber = elDigitado.value;
    formattedNumber = formattedNumber.replace(/\.$/g, '');
    formattedNumber = formattedNumber.replace(/\./g, ',');
    formattedNumber = formattedNumber.replace(/[^0-9\.,]/g, '');
    formattedNumber = formattedNumber.replace(/(\d+)\.(\d+),/g, '$1$2,');
    formattedNumber = a5(formattedNumber, ',');
    elDigitado.value = formattedNumber;
    var txtDigitado = parseFloat(elDigitado.value.replace(',', '.'));
    if (isNaN(txtDigitado)) {
        elDestino.value = '0,00';
        return;
    }
    var result;
    if (elDigitado == elNac) {
        result = txtDigitado / 4.99;
    } else {
        result = txtDigitado * 4.99;
    }
    result = result.toFixed(2);
    result = a4(result) + '';
    result = result.replace(/\./, ',');
    elDestino.value = result;
}
function a7() {
    document.body.className = document.body.className.replace(/activated/g, '');
}
function a8() {
    if (!document.body.className.match(/activated/)) {
        document.body.className += ' activated';
    }
}
function a9(el) {
    if (el.value.length > 10) {
        el.style.width = '6.7em';
    } else if (el.value.length < 3) {
        el.style.width = el.value.length * 0.65 + 'em';
    } else {
        el.style.width = el.value.length * 0.65 - 0.3 + 'em';
    }
}
function a9s() {
    a9(elEst);
    a9(elNac);
}
function ab() {
    elEst.style.width = elNac.style.width = 6.6 + 'em';
}
function ac() {
    a9s();
}
function ad(el) {
    if (!el.value.match(/\d/)) {
        el.value = '0,00';
    } else if (el.value.match(/^\d+(,\d*)?$/)) {
        el.value = parseFloat(el.value.replace(',', '.'))
            .toFixed(2)
            .replace('.', ',');
    }
}
elEst.onfocus = elNac.onfocus = function () {
    ab();
    a8();
    isActivated = true;
    var $this = this;
    window.setTimeout(function () {
        $this.select();
    }, 300);
    if (isMobile) {
        document.getElementById('cotacao').scrollIntoView();
    }
};
elEst.onblur = elNac.onblur = function () {
    ad(this);
    window.setTimeout(function () {
        if (!isActivated) {
            ac();
            a7();
        }
    }, 300);
    isActivated = false;
};
spans[0].onmouseover = spans[1].onmouseover = function () {
    if (!isActivated) {
        a8();
    }
};
spans[0].onmousedown =
    spans[1].onmousedown =
    spans[0].onclick =
    spans[1].onclick =
        function (event) {
            if (event.target.tagName != 'INPUT') {
                var input =
                    event.currentTarget.getElementsByTagName('input')[0];
                window.setTimeout(function () {
                    input.select();
                    input.focus();
                }, 100);
            }
        };
spans[0].onmouseout = spans[1].onmouseout = function () {
    if (!isActivated) {
        a7();
    }
};
if (!isActivated) {
    a9s();
}
elEst.onkeyup = function (event) {
    if (!event) {
        event = window.event;
    }
    if (event.keyCode != 9) {
        a6(this, elNac);
    }
};
elNac.onkeyup = function (event) {
    if (!event) {
        event = window.event;
    }
    if (event.keyCode != 9) {
        a6(this, elEst);
    }
};
/* ]]> */
