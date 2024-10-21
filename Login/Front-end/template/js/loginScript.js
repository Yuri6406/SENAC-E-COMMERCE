// Selecionar os campos de entrada DOM do login
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const btn = document.getElementById('entrar');

// Função para pegar o e-mail e senha
function verificacao() {
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Log dos valores de entrada
    console.log("Valores capturados:", { email, senha });

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    fetch("http://127.0.0.1:8080/login/loginAutenticado", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email: email, senha: senha })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na autenticação');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === "success") {
                //Armazenar os dados do usuario no localStorage
                localStorage.setItem('user', JSON.stringify(data.user));

                // Redireciona para a página desejada
                window.location.href = "../pages/painelUser.html";
            } else {
                alert(data.message || "E-mail ou senha incorretos.");
            }
        })
        .catch(error => {
            alert("E-mail ou senha incorretos.");
        });
}

// Adiciona o evento de clique ao botão
btn.addEventListener('click', () => {
    verificacao();
});
