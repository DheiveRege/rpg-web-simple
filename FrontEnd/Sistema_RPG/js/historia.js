const historia = document.querySelector("#p");
const btnAvancar = document.querySelector("#avancar");
const cenaImg = document.querySelector("#cena-img");

let cenaAtual = 0;

const cenas = [
    {
        imagem: "../assets/images/cena_1.png",
        historia: "O sol escaldante cobria o deserto do Egito. Após uma longa viagem, você finalmente avista uma antiga pirâmide quase esquecida pelo tempo."
    },
    {
        imagem: "../assets/images/cena_2.png",
        historia: "Ao se aproximar, você encontra uma passagem escondida entre as pedras. A entrada parece ter sido fechada há milhares de anos."
    },
    {
        imagem: "../assets/images/cena_3.png",
        historia: "Você entra na pirâmide e encontra corredores escuros, decorados com hieróglifos e estátuas antigas. O silêncio torna cada passo ainda mais assustador."
    },
    {
        imagem: "../assets/images/cena_4.png",
        historia: "O caminho não é fácil. Você precisa resolver antigos enigmas e superar armadilhas para conseguir continuar."
    },
    {
        imagem: "../assets/images/cena_5.png",
        historia: "Depois de muitos desafios, você finalmente encontra uma enorme sala. No centro dela, um antigo baú dourado chama sua atenção."
    },
    {
        imagem: "../assets/images/cena_6.png",
        historia: "Antes que você consiga avançar, uma figura surge das sombras. Ele também estava procurando o tesouro da pirâmide. “Você não vai chegar até ele primeiro!”"
    },
    {
        imagem: "../assets/images/cena_7.png",
        historia: "O vilão avança em sua direção. Você se prepara para lutar. As antigas tochas iluminam a sala enquanto os dois começam o combate."
    },
    {
        imagem: "../assets/images/cena_8.png",
        historia: "Depois de uma intensa batalha, você consegue desarmar seu adversário. Ele cai no chão e percebe que não conseguirá impedir sua jornada."
    },
    {
        imagem: "../assets/images/cena_9.png",
        historia: "Você segue sozinho e encontra uma enorme porta de pedra. Nela está escrito um último enigma. A resposta correta fará a porta se abrir."
    }
];

function mostrarCena() {
    const cena = cenas[cenaAtual];
    historia.textContent = cena.historia;
    cenaImg.src = cena.imagem;

    if (cenaAtual >= cenas.length - 1) {
        btnAvancar.disabled = true;
        btnAvancar.textContent = "Fim";
    }
}

btnAvancar.addEventListener("click", () => {
    if (cenaAtual < cenas.length - 1) {
        cenaAtual++;
        mostrarCena();
    }
});

mostrarCena();