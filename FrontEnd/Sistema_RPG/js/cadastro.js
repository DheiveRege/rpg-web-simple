import { cadastrarUser } from './api.js';
console.log("CADASTRO.js");
const cadastroForm = document.getElementById('CadastroForm');

cadastroForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        name: nome,
        email: email,
        password: senha
    };

    try {
        await cadastrarUser(data);

        alert('Conta criada com sucesso!');

        window.location.href = './login.html';

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});

