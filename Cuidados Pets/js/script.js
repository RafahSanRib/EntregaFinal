document.addEventListener("DOMContentLoaded", () => {
    console.log("Site Cuidados Pets carregado com sucesso 🐶");

    const alerta = document.querySelector(".alerta");

    if (alerta) {
        alerta.addEventListener("click", () => {
            alert("Em caso de emergência, procure um veterinário imediatamente!");
        });
    }
});


/* ================= GALERIA DE IMAGENS ================= */

const imagens = [
  "./images/cachorro1.jpg",
  "./images/cachorro2.jpg",
  "./images/cachorro3.jpg"
];

document.getElementById("btn-galeria")?.addEventListener("click", () => {
  const galeria = document.getElementById("imagens-galeria");
  galeria.innerHTML = "";

  imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto de cachorro";
    img.style.width = "150px";
    img.style.margin = "10px";
    galeria.appendChild(img);
  });
});


/* ================= TABELA DE RAÇAS (CLICK) ================= */

const racas = {
  "Labrador Retriever": "É um ótimo cão para famílias e muito amigável.",
  "Golden Retriever": "Muito sociável, ideal para crianças.",
  "Poodle": "Altamente treinável e ótimo para quem tem alergia."
};

document.querySelectorAll("table tbody tr").forEach(row => {
  row.addEventListener("click", () => {
    const nomeRaca = row.children[0].textContent;
    alert(`Info extra: ${racas[nomeRaca] || "Mais informações em breve."}`);
  });
});


/* ================= DICAS ALEATÓRIAS ================= */

const dicas = [
  "Escove os dentes do seu cachorro 3x por semana.",
  "Evite dar chocolate – é tóxico!",
  "Água fresca sempre disponível."
];

document.getElementById("btn-dica")?.addEventListener("click", () => {
  const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  document.getElementById("dica-texto").textContent = aleatoria;
});


/* ================= FILTRO DE RAÇAS ================= */

const listaRacas = [
  { nome: "Labrador", caracteristica: "amigável" },
  { nome: "Pastor Alemão", caracteristica: "corajoso" },
  { nome: "Poodle", caracteristica: "inteligente" }
];

document.getElementById("campo-filtro")?.addEventListener("input", e => {
  const valor = e.target.value.toLowerCase();
  const resultado = document.getElementById("resultado-raças");
  resultado.innerHTML = "";

  listaRacas
    .filter(raca => raca.caracteristica.includes(valor))
    .forEach(raca => {
      const li = document.createElement("li");
      li.textContent = `${raca.nome} – ${raca.caracteristica}`;
      resultado.appendChild(li);
    });
});


/* ================= CONVERSOR DE XÍCARAS ================= */

document.getElementById("btn-converter")?.addEventListener("click", () => {
  const xicaras = parseFloat(document.getElementById("xicaras").value);

  if (isNaN(xicaras)) {
    document.getElementById("resultado-conversao").textContent =
      "Informe um valor válido.";
    return;
  }

  const gramas = xicaras * 100; // 1 xícara ≈ 100g (exemplo)
  document.getElementById("resultado-conversao").textContent =
    `Isso equivale a aproximadamente ${gramas}g de ração.`;
});
