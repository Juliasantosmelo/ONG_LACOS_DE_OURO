// "Quando o documento HTML estiver totalmente carregado..."
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Encontre o botão hambúrguer pelo seu nome de classe
    const menuHamburger = document.querySelector('.menu-hamburger');
    
    // 2. Encontre a navegação (<nav>)
    const nav = document.querySelector('nav');

    // 3. Diga ao botão para "ouvir" por um clique
    menuHamburger.addEventListener('click', function() {
        
        // 4. Quando o clique acontecer, vá até o <nav> e 
        //    "adicione" ou "remova" a classe 'menu-aberto'.
        //    (É como um interruptor de luz: liga/desliga)
        nav.classList.toggle('menu-aberto');
    });

});
// ... (código do menu hambúrguer continua aqui em cima) ...

// --- CÓDIGO PARA O MODAL DE DOAÇÃO ---

// "Quando o documento HTML estiver totalmente carregado..."
document.addEventListener('DOMContentLoaded', function() {

    // Encontra os elementos pelo ID
    const botaoAbrirModal = document.getElementById('abrir-modal-doacao');
    const botaoFecharModal = document.getElementById('fechar-modal');
    const modal = document.getElementById('modal-doacao');

    // Verifica se os elementos existem ANTES de adicionar os 'ouvintes'
    // (Isso evita erros nas páginas que não têm o modal)
    if (botaoAbrirModal && modal) {
        // Se clicar no H3 "Faça uma Doação"...
        botaoAbrirModal.addEventListener('click', function() {
            modal.classList.add('modal-aberto'); // Adiciona a classe para mostrar
        });
    }

    if (botaoFecharModal && modal) {
        // Se clicar no botão 'X'...
        botaoFecharModal.addEventListener('click', function() {
            modal.classList.remove('modal-aberto'); // Remove a classe para esconder
        });
    }
    
    // Opcional: Fechar o modal se clicar fora dele (no overlay escuro)
    if (modal) {
        modal.addEventListener('click', function(event) {
            // Verifica se o clique foi DIRETAMENTE no overlay (e não dentro do conteúdo)
            if (event.target === modal) {
                 modal.classList.remove('modal-aberto');
            }
        });
    }

});