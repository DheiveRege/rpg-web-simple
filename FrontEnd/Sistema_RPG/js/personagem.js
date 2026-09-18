import { createCharacter } from "./api.js";

const nome = document.getElementById("nomePersonagem");
const nomeInput = document.getElementById("nome");
const classe = document.getElementById("classePersonagem");
const vida = document.getElementById("vidaPersonagem");
const forca = document.getElementById("forcaPersonagem");
const agilidade = document.getElementById("agilidadePersonagem");
const mana = document.getElementById("manaPersonagem");
const personagem = document.getElementById("personagem");
const imagem = document.getElementById("imagemPersonagem");
const botaoPronto = document.querySelector(".btn-pronto");



personagem.addEventListener("change", () => {

    if (personagem.value === "guerreiro") {

        imagem.src = "/Sistema_RPG/assets/images/negao.jpg";

        nome.textContent = "Personagem escolhido:";
        classe.textContent = "Classe: Guerreiro";
        vida.textContent = "Vida: 100";
        forca.textContent = "Força: 15";
        agilidade.textContent = "Agilidade: 20";
        mana.textContent = "Mana: 0";

    } else if (personagem.value === "mago") {

        imagem.src = "/Sistema_RPG/assets/images/albino.png";

        nome.textContent = "Personagem escolhido:";
        classe.textContent = "Classe: Mago";
        vida.textContent = "Vida: 100";
        forca.textContent = "Força: 20";
        agilidade.textContent = "Agilidade: 15";
        mana.textContent = "Mana: 40";

    } else if (personagem.value === "arqueiro") {

        imagem.src = "/Sistema_RPG/assets/images/dalvana.jpg";

        nome.textContent = "Personagem escolhido:";
        classe.textContent = "Classe: Arqueiro";
        vida.textContent = "Vida: 100";
        forca.textContent = "Força: 15";
        agilidade.textContent = "Agilidade: 25";
        mana.textContent = "Mana: 0";

    } else if (personagem.value === "ladino") {

        imagem.src = "/Sistema_RPG/assets/images/top.png";

        nome.textContent = "Personagem escolhido:";
        classe.textContent = "Classe: Ladino";
        vida.textContent = "Vida: 100";
        forca.textContent = "Força: 10";
        agilidade.textContent = "Agilidade: 30";
        mana.textContent = "Mana: 0";
    }
});

botaoPronto.addEventListener("click", async () => {

    const nomePersonagem = nomeInput.value.trim();
    const classeSelecionada = personagem.value;
    const userID = localStorage.getItem("userId")

    if (!nomePersonagem || !classeSelecionada) {
        alert("Preencha o nome e escolha uma classe.");
        return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
        alert("Você precisa estar logado.");
        return;
    }

    let className;

    switch (classeSelecionada) {

        case "guerreiro":
            className = "Warrior";
            break;

        case "mago":
            className = "Mage";
            break;

        case "ladino":
            className = "Ladino";
            break;

        case "arqueiro":
            className = "Archer";
            break;

        default:
            alert("Classe inválida.");
            return;
    }

    const data = {
        userId: userID,
        name: nomePersonagem,
        className: className
    };

    console.log("Enviando personagem:", data);

    try {

        const result = await createCharacter(data, token);

        window.location.href = './historia.html';

        console.log("Personagem criado:", result);

        alert("Personagem criado com sucesso!");

    } catch (error) {

        console.error("Erro ao criar personagem:", error);

        alert(error.message || "Erro ao criar personagem.");
    }
});