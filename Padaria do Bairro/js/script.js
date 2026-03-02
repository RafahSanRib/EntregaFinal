// ===============================
// SISTEMA PROFISSIONAL PADARIA
// ===============================

// ---------- DADOS FIXOS ----------
const tabelaPrecos = {
    bolo: { pequeno: 30, medio: 45, grande: 60 },
    torta: { pequeno: 35, medio: 50, grande: 70 },
    salgados: { pequeno: 25, medio: 40, grande: 55 }
};

const TAXA_IMPOSTO = 0.05;

// ---------- LOCAL STORAGE ----------
function salvarLocal(nome, dados) {
    localStorage.setItem(nome, JSON.stringify(dados));
}

function carregarLocal(nome) {
    return JSON.parse(localStorage.getItem(nome)) || [];
}

// ---------- CARRINHO ----------
let carrinho = carregarLocal("carrinho");

function adicionarCarrinho(item) {
    carrinho.push(item);
    salvarLocal("carrinho", carrinho);
    atualizarDashboard();
}

function limparCarrinho() {
    carrinho = [];
    salvarLocal("carrinho", carrinho);
    atualizarDashboard();
}

// ---------- CALCULADORA ----------
function calcularTotal(tipo, tamanho) {
    let precoBase = tabelaPrecos[tipo][tamanho];

    let desconto = 0;
    if (precoBase >= 60) desconto = 0.15;
    else if (precoBase >= 40) desconto = 0.10;
    else if (precoBase >= 30) desconto = 0.05;

    let valorComDesconto = precoBase - (precoBase * desconto);
    let total = valorComDesconto + (valorComDesconto * TAXA_IMPOSTO);

    return total;
}

// ---------- FORMATADOR ----------
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// ---------- DASHBOARD ----------
function criarDashboard() {
    if (document.getElementById("dashboard")) return;

    const div = document.createElement("section");
    div.id = "dashboard";
    div.style.padding = "20px";
    div.style.background = "#f4f4f4";
    div.style.margin = "20px";
    div.style.borderRadius = "8px";

    div.innerHTML = `
        <h2>📊 Dashboard da Padaria</h2>
        <p><strong>Total de Pedidos:</strong> <span id="totalPedidos">0</span></p>
        <p><strong>Faturamento Total:</strong> <span id="faturamento">R$ 0,00</span></p>
        <button onclick="limparCarrinho()">🧹 Limpar Carrinho</button>
    `;

    document.body.appendChild(div);
}

function atualizarDashboard() {
    criarDashboard();

    const totalPedidos = carrinho.length;
    const faturamento = carrinho.reduce((acc, item) => acc + item.total, 0);

    document.getElementById("totalPedidos").innerText = totalPedidos;
    document.getElementById("faturamento").innerText = formatarMoeda(faturamento);
}

// ---------- FORMULÁRIO REAL ----------
document.addEventListener("DOMContentLoaded", () => {

    atualizarDashboard();

    const form = document.querySelector(".pedido-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const tipo = document.querySelector("input[name='tipo_produto']:checked")?.value;
        const tamanho = document.querySelector("input[name='tamanho']:checked")?.value;
        const data = document.getElementById("data_entrega").value;

        if (!nome || !tipo || !tamanho) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        const total = calcularTotal(tipo, tamanho);
        const pontos = Math.floor(total);

        const pedido = {
            cliente: nome,
            tipo,
            tamanho,
            total,
            pontos,
            data,
            status: "Em preparação"
        };

        adicionarCarrinho(pedido);

        alert(`
Pedido realizado com sucesso!

Cliente: ${nome}
Total: ${formatarMoeda(total)}
Pontos Fidelidade: ${pontos}
        `);

        form.reset();
    });

});