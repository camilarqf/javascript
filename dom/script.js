/* window.alert("ola"); */

/* const sel = document.querySelector("h1");

sel.addEventListener("click", function () {
    console.log("CLicou em", sel.innerText);
}); */

//retorne o url da pagina atual utilizando o objeto window

const hrefAtual = window.location.href;
console.log(hrefAtual);

//seleciona o primeiro elemento da pagina que possua a classe ativo

const elementAtivo = document.querySelector(".ativo");
console.log(elementAtivo.innerText);

//retorna a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem)

//retorna a largura da janela
const largura = innerWidth;
console.log(largura);
