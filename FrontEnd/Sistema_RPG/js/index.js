const iniciar = document.getElementById("btnInicio");
const novoGame = document.getElementById("newGame")

iniciar.addEventListener("click", () => {
    return window.location.href = "./pages/historia.html";
})

novoGame.addEventListener("click", () => {
    return window.location.href = "./pages/personagem.html";
})