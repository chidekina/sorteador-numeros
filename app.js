function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    if (de > ate || quantidade > (ate - de)){
        alert('Por favor, veja se voce inseriu os numeros corretamente.')
        reiniciar();
        alterarClasse();
    }
    else{
    for (i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero)
        let resultado = document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.sort(compararNumeros)}</label>`;
        alterarClasse();
    }
    }

    function compararNumeros(a, b) {
        return a - b;
    }

    function obterNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}


function reiniciar() {
    let quantidadeZerada = document.getElementById('quantidade').value = null;
    let deZerada = document.getElementById('de').value = null;
    let ateZerada = document.getElementById('ate').value = null;
    let numerosSorteadosZerados = document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarClasse()
}

function alterarClasse() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}