let contador = 0;

function atualizarTela() {
    document.getElementById("valor").textContent = contador;
}

function alterarValor(numero) {
    contador += numero;
    atualizarTela();
}

function resetar() {
    contador = 0;
    atualizarTela();
}

// Atualiza ao carregar
atualizarTela();