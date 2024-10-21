
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Simular carregamento de conteúdo
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1500); // Ajuste o tempo de carregamento simulado conforme necessário
});


async function buscarProdutos() {

    const url = 'https://fakestoreapi.com/products';

    try {
        const resposta = await fetch(url);
        const produtos = await resposta.json();

        const container = document.getElementById('produtos');
        container.innerHTML = ''; // Limpa o conteúdo anterior

        produtos.forEach(produto => {
            const divProduto = document.createElement('div');
            divProduto.classList.add('card');
            divProduto.innerHTML = `
                <div class="card-img">
                    <img src="${produto.image}" alt="${produto.title}">
                </div>
                <div class="card-title">${produto.title}</div>
                <div class="card-subtitle">${produto.description.slice(0, 50)}...</div> <!-- Limita a descrição -->
                <div class="card-footer">
                <div class="card-price">R$ ${produto.price}</div>
                <button id="add" class="card-btn"> Adicionar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg></button>
                <div class="rating">
                    <input value="5" name="rating" id="star5" type="radio">
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio">
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio">
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio">
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio">
                    <label for="star1"></label>
                </div>
                </div>
            `;
            container.appendChild(divProduto);
        });
    } catch (erro) {
        console.error('Erro ao buscar produtos:', erro);
    }
};

buscarProdutos();
// Chama a função ao carregar a página

function verificarLogin() {
    const userData = localStorage.getItem('user');

    if (userData) {
        window.location.href = "../template/pages/painelUser.html";
    } else {
        window.location.href = "../template/pages/login.html";
    }
}

document.getElementById('logado').addEventListener('click', function () {
    verificarLogin();
});




