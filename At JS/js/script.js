console.log("Hello World!!!");
console.log("Olá Mundo!");

alert("Bem-vindo");

let senha="";

while(senha !=="1234"){
    senha=prompt("Digite a senha");

    if(senha !== "1234"){
        alert("Senha incorreta, tente novamente");
    }
}
alert ("Acesso liberado");