document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const confirmarCompraBtn = document.getElementById("confirmar-compra");
    const voltarBtn = document.getElementById("voltar");
    const voltarMenuBtn = document.querySelector(".menu"); // Botão "Voltar para o Menu"

    // Função para exibir o modal de confirmação
    confirmarCompraBtn.addEventListener("click", function() {
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toLocaleDateString('pt-BR') + ' ' + dataAtual.toLocaleTimeString('pt-BR');

        document.getElementById("data-confirmacao").textContent = dataFormatada; //Coloca a data e hora em tempo real
        modal.style.display = "flex";
    });

    // Função para voltar para a aba de pagamento
    voltarBtn.addEventListener("click", function() {
        window.location.href = "/HTML/telaCarrinhoPagamento.html"; // Redireciona para a tela de pagamento
    });

    // Função para voltar para o menu
    voltarMenuBtn.addEventListener("click", function() {
        window.location.href = "/HTML/telaPrincipal.html"; // Redireciona para a tela do menu
    });

    // Simulação de navegação entre abas
    
    const abas = document.querySelectorAll(".aba");
    abas.forEach(aba => {
        aba.addEventListener("click", function() {
            abas.forEach(a => a.classList.remove("ativa"));
            this.classList.add("ativa");
        });
    });
});