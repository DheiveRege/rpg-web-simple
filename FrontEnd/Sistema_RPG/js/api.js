const API_URL = 'http://localhost:3000';

// Cadastro
export async function cadastrarUser(data) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Erro ao cadastrar usuário');
    }

    return result;
}


// Login
export async function takeLogin(data) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Erro ao fazer login');
    }

    return result;
}


// UPDATE
export async function updateUser(id, data, token) {
    const response = await fetch(`${API_URL}/users${id}`, {
        method: "PATCH",

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Erro ao atualizar usuário');
    }

    return result;
}


// Listar personagens
export async function listCharacter() {
    const response = await fetch(`${API_URL}/characters`);

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Erro ao listar personagens');
    }

    return result;
}


// Criar personagem
export async function createCharacter(data, token) {
    const response = await fetch(`${API_URL}/characters`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Erro ao criar personagem');
    }

    return result;
}


// Deletar personagem
export async function deleteCharacter(id, token) {
    const response = await fetch(`${API_URL}/character/${id}`, {
        method: 'DELETE',

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Erro ao deletar personagem');
    }

    return true;
}
