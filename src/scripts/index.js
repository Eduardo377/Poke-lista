const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    !modoEscuroAtivo ? imagemBotaoTrocaTema.setAttribute("src", "./src/assets/moon.png") : imagemBotaoTrocaTema.setAttribute("src", "./src/assets/sun.png");
});