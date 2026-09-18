import { takeLogin } from './api.js';

const loginForm = document.getElementById('LoginForm');
const btnCadastrar = document.getElementById('btnCadastrar');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        email: email,
        password: senha
    };

    try {
        const result = await takeLogin(data);

        localStorage.setItem('token', result.token);
        localStorage.setItem('userId', result.user.id);

        alert('Login realizado com sucesso!');


        window.location.href = '/Sistema_RPG/index.html';

    } catch (error) {
        alert(error.message);
    }
});

btnCadastrar.addEventListener('click', () => {
    window.location.href = './cadastro.html';
});