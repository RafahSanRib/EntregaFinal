const btnDark = document.getElementById("btn-dark");
 
btnDark.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});
 
const projetos = [
    {
        titulo: "Página inicial",
        descricao: "Pagina usando HTML e CSS",
        link: "#"
    },
    {
        titulo:"E-commerce",
        descricao:"Layout com Flexbox e Grid",
        link: "#"
    },
    {
        titulo: "Portifólio",
        descricao: "Meu primeiro portifólio",
        link: "#"
    }
];
 
const lista = document.getElementById("lista-projetos");
 
projetos.forEach((projeto)=>{
    const card = document.createElement("div");
    card.classList.add("card");
 
    card.innerHTML = `
    <h3>${projeto.titulo}</h3>
    <p>${projeto.descricao}</p>
    <a href = "${projeto.link}">Ver projeto</a>  
    `;
 
    lista.appendChild(card);
 
});
const btnLinkendin = document.getElementById("btn-linkendin");
const btnGithub = document.getElementById("btn-github");
 
btnLinkendin.addEventListener("click",() =>{
    window.open("https://www.linkendin.com/in/seuusuario", "_blank"
 
    );
});
 
btnGithub.addEventListener("click", ()=>{
    window.open(
        "https://github.com/seuusuario",
        "_blank"
    );
});