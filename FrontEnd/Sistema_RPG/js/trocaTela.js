
document.addEventListener("DOMContentLoaded", () => {

    const btnInicio = document.getElementById("btnInicio");
    const btnLogin = document.getElementById("btnLogin");
    const btnCadastrar = document.getElementById("btnCadastrar");

    if (btnInicio) {
        btnInicio.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = "login.html";
        });
    }

    if (btnLogin) {
        btnLogin.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = "personagem.html";
        });
    }

    if (btnCadastrar) {
        btnCadastrar.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = "cadastro.html";
        });
    }

})