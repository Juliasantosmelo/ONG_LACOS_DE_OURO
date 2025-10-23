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
// --- CÓDIGO PARA VALIDAÇÃO AVANÇADA DO FORMULÁRIO (cadastro.html) ---

// "Quando o documento HTML estiver totalmente carregado..."
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Encontre o formulário pelo seu ID
    const formCadastro = document.getElementById('form-cadastro'); 

    // 2. Se o formulário existir nesta página...
    if (formCadastro) {
        
        // 3. NÃO deixe o formulário ser enviado da maneira tradicional
        formCadastro.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão

            // 4. Valide TODOS os campos ANTES de enviar
            let isValid = validarFormularioCompleto(); 

            // 5. Se TUDO estiver válido...
            if (isValid) {
                alert('Cadastro enviado com sucesso! (Simulação)');
                // Aqui, em um site real, os dados seriam enviados para um servidor.
                // formCadastro.submit(); // Descomente esta linha se quiser simular o envio real
                formCadastro.reset(); // Limpa o formulário
            } else {
                alert('Por favor, corrija os erros no formulário.');
            }
        });

        // --- Funções Auxiliares de Validação ---

        function validarFormularioCompleto() {
            let formValido = true; 
            
            if (!validarCampoTexto('nome', 'Nome Completo é obrigatório.')) formValido = false;
            if (!validarEmail('email')) formValido = false;
            if (!validarCPF('cpf')) formValido = false;
            // Adicione validações para telefone, data, cep, etc. AQUI
            if (!validarCampoTexto('telefone', 'Telefone é obrigatório.')) formValido = false; // Exemplo
            if (!validarCampoTexto('nascimento', 'Data de Nascimento é obrigatória.')) formValido = false; // Exemplo
            if (!validarCampoTexto('cep', 'CEP é obrigatório.')) formValido = false; // Exemplo
            if (!validarCampoTexto('endereco', 'Endereço é obrigatório.')) formValido = false; // Exemplo
            if (!validarCampoTexto('cidade', 'Cidade é obrigatória.')) formValido = false; // Exemplo
            if (!validarCampoTexto('estado', 'Estado é obrigatório.')) formValido = false; // Exemplo


            return formValido;
        }

        function validarCampoTexto(idCampo, mensagemErro) {
            const campo = document.getElementById(idCampo);
            const erroSpan = campo.nextElementSibling; 

            if (!campo || !erroSpan) return true; // Se o campo não existir, considera válido

            if (campo.value.trim() === '') { 
                mostrarErro(campo, erroSpan, mensagemErro);
                return false;
            } else {
                limparErro(campo, erroSpan);
                return true;
            }
        }
        
        function validarEmail(idCampo) {
            const campo = document.getElementById(idCampo);
            const erroSpan = campo.nextElementSibling;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

            if (!campo || !erroSpan) return true;

            if (campo.value.trim() === '') {
                mostrarErro(campo, erroSpan, 'E-mail é obrigatório.');
                return false;
            } else if (!emailRegex.test(campo.value)) { 
                mostrarErro(campo, erroSpan, 'Formato de e-mail inválido.');
                return false;
            } else {
                limparErro(campo, erroSpan);
                return true;
            }
        }

        function validarCPF(idCampo) {
             const campo = document.getElementById(idCampo);
             const erroSpan = campo.nextElementSibling;
             const cpfLimpo = campo.value.replace(/\D/g, ''); 
             const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

             if (!campo || !erroSpan) return true;

             if (campo.value.trim() === '') {
                 mostrarErro(campo, erroSpan, 'CPF é obrigatório.');
                 return false;
             } else if (cpfLimpo.length !== 11 || !cpfRegex.test(campo.value)) { 
                 mostrarErro(campo, erroSpan, 'Formato de CPF inválido (use XXX.XXX.XXX-XX).');
                 return false;
             } else {
                 limparErro(campo, erroSpan);
                 return true;
             }
        }
        // Adicione AQUI funções de validação mais específicas se precisar (ex: Telefone, CEP)

        // --- Funções de Feedback Visual ---

        function mostrarErro(campoInput, spanErro, mensagem) {
            if (campoInput && spanErro) {
                campoInput.classList.add('erro-validacao'); 
                spanErro.textContent = mensagem; 
            }
        }

        function limparErro(campoInput, spanErro) {
            if (campoInput && spanErro) {
                campoInput.classList.remove('erro-validacao'); 
                spanErro.textContent = ''; 
            }
        }
        
        // BÔNUS: Validar em tempo real 
        const camposParaValidar = ['nome', 'email', 'cpf', 'telefone', 'nascimento', 'cep', 'endereco', 'cidade', 'estado']; 
        camposParaValidar.forEach(id => {
            const campo = document.getElementById(id);
            if (campo) {
                campo.addEventListener('blur', function() { 
                    if (id === 'nome') validarCampoTexto(id, 'Nome Completo é obrigatório.');
                    if (id === 'email') validarEmail(id);
                    if (id === 'cpf') validarCPF(id);
                    // Adicione chamadas para outras validações aqui
                    if (id === 'telefone') validarCampoTexto(id, 'Telefone é obrigatório.'); // Exemplo simples
                    if (id === 'nascimento') validarCampoTexto(id, 'Data de Nascimento é obrigatória.'); // Exemplo simples
                    if (id === 'cep') validarCampoTexto(id, 'CEP é obrigatório.'); // Exemplo simples
                    if (id === 'endereco') validarCampoTexto(id, 'Endereço é obrigatório.'); // Exemplo simples
                    if (id === 'cidade') validarCampoTexto(id, 'Cidade é obrigatória.'); // Exemplo simples
                    if (id === 'estado') validarCampoTexto(id, 'Estado é obrigatório.'); // Exemplo simples
                });
                 campo.addEventListener('input', function() { 
                    limparErro(campo, campo.nextElementSibling);
                });
            }
        });

    } // Fim do if(formCadastro)
}); // Fim do DOMContentLoaded para Validação