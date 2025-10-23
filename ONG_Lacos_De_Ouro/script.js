// --- DADOS GLOBAIS (Exemplo para Templates) ---

// --- DADOS GLOBAIS (Exemplo para Templates) ---

const projetos = [
    {
        id: 'clube-leitura', // ID para o link #
        titulo: 'Clube da Leitura',
        imagem: 'imagens/projeto-leitura.jpg', 
        alt: 'Voluntária lendo um livro em voz alta para um grupo de idosos atentos.',
        descricao: 'Sessões semanais de leitura em voz alta, trazendo os mundos da literatura para quem tem dificuldade de ler.',
        tag: 'Leitura',
        tagClasse: 'tag-leitura',
        // NOVOS DETALHES:
        frequencia: 'Todas as terças-feiras, 14h',
        local: 'Casas de repouso parceiras (Zona Leste)',
        objetivo: 'Estimular a imaginação e combater a solidão.'
    },
    {
        id: 'tardes-jogos', // ID para o link #
        titulo: 'Tardes de Jogos',
        imagem: 'imagens/projeto-jogos.jpg', 
        alt: 'Um senhor e uma jovem sorrindo enquanto jogam uma partida de xadrez.',
        descricao: 'Estimulamos a mente e a interação social com jogos de tabuleiro como xadrez, damas e baralho. A competição é amigável!',
        tag: 'Jogos',
        tagClasse: 'tag-jogos',
        // NOVOS DETALHES:
        frequencia: 'Quinzenalmente, às quintas-feiras, 15h',
        local: 'Centro Comunitário Vila Esperança',
        objetivo: 'Exercitar a cognição e promover novas amizades.'
    }
    // Poderíamos adicionar mais objetos aqui para simular mais projetos
];

// --- FIM DOS DADOS GLOBAIS ---


function gerarCardsProjeto() {
    const containerProjetos = document.getElementById('lista-de-projetos');
    if (!containerProjetos) return; 
    containerProjetos.innerHTML = ''; 

    projetos.forEach(projeto => { // <-- Abre o forEach
        
        // --- ESTE É O SEU TRECHO CORRETO ---
        // 5. Cria o HTML do card usando os dados do projeto (COM MAIS DETALHES)
        const cardHTML = `
            <article class="projeto-card" id="${projeto.id}"> 
                <img src="${projeto.imagem}" alt="${projeto.alt}">
                <div class="projeto-card-conteudo">
                    <span class="tag ${projeto.tagClasse}">${projeto.tag}</span> 
                    <h2>${projeto.titulo}</h2>
                    <p>${projeto.descricao}</p>
                    <p class="detalhe-projeto"><strong>Frequência:</strong> ${projeto.frequencia}</p>
                    <p class="detalhe-projeto"><strong>Local:</strong> ${projeto.local}</p>
                    <p class="detalhe-projeto"><strong>Objetivo:</strong> ${projeto.objetivo}</p>
                </div>
            </article>
        `;
        // --- FIM DO SEU TRECHO ---

        // Adiciona o card gerado ao container
        containerProjetos.innerHTML += cardHTML; 

    }); // <-- Fecha o forEach
}
// --- FUNÇÃO PARA INICIALIZAR O MENU HAMBÚRGUER ---

function inicializarMenuHamburger() {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const nav = document.querySelector('nav');

    if (menuHamburger && nav) {
        menuHamburger.addEventListener('click', function() {
            nav.classList.toggle('menu-aberto');
        });
    }
}

// --- FIM DO MENU HAMBÚRGUER ---


// --- FUNÇÃO PARA INICIALIZAR O MODAL DE DOAÇÃO ---

function inicializarModal() {
    const botaoAbrirModal = document.querySelector('#abrir-modal-doacao, #abrir-modal-doacao-home');
    const botaoFecharModal = document.getElementById('fechar-modal');
    const modal = document.getElementById('modal-doacao');

    if (botaoAbrirModal && modal) {
        botaoAbrirModal.addEventListener('click', function() {
            modal.classList.add('modal-aberto');
        });
    }

    if (botaoFecharModal && modal) {
        botaoFecharModal.addEventListener('click', function() {
            modal.classList.remove('modal-aberto');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                 modal.classList.remove('modal-aberto');
            }
        });
    }
}

// --- FIM DO MODAL ---


// --- FUNÇÃO PARA INICIALIZAR AS MÁSCARAS (IMask.js) ---

function inicializarMascaras() {
    // Verifica se a biblioteca IMask foi carregada
    if (typeof IMask !== 'undefined') {
        const cpfInput = document.getElementById('cpf');
        const telInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        if (cpfInput) {
            IMask(cpfInput, { mask: '000.000.000-00' });
        }
        if (telInput) {
            IMask(telInput, { mask: '(00) 00000-0000' });
        }
        if (cepInput) {
            IMask(cepInput, { mask: '00000-000' });
        }
    } else {
        console.warn("Biblioteca IMask não encontrada. Máscaras não serão aplicadas.");
    }
}

// --- FIM DAS MÁSCARAS ---


// --- FUNÇÃO PARA INICIALIZAR VALIDAÇÃO AVANÇADA DO FORMULÁRIO ---

function inicializarValidacaoFormulario() {
    const formCadastro = document.getElementById('form-cadastro'); 

    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            event.preventDefault(); 
            let isValid = validarFormularioCompleto(); 
            if (isValid) {
                alert('Cadastro enviado com sucesso! (Simulação)');
                formCadastro.reset();
            } else {
                alert('Por favor, corrija os erros no formulário.');
            }
        });

        // --- Funções Auxiliares de Validação (Internas a esta inicialização) ---
        function validarFormularioCompleto() { /* ... código completo ... */ }
        function validarCampoTexto(idCampo, mensagemErro) { /* ... código completo ... */ }
        function validarEmail(idCampo) { /* ... código completo ... */ }
        function validarCPF(idCampo) { /* ... código completo ... */ }
        function mostrarErro(campoInput, spanErro, mensagem) { /* ... código completo ... */ }
        function limparErro(campoInput, spanErro) { /* ... código completo ... */ }

        // --- CÓDIGO COMPLETO DAS FUNÇÕES DE VALIDAÇÃO ---
        // (Cole aqui o código COMPLETO da validação que fizemos antes, 
        //  incluindo as chamadas no 'blur' e 'input')
        
        // Colocando o código completo aqui para garantir:
        function validarFormularioCompleto() {
            let formValido = true; 
            if (!validarCampoTexto('nome', 'Nome Completo é obrigatório.')) formValido = false;
            if (!validarEmail('email')) formValido = false;
            if (!validarCPF('cpf')) formValido = false;
            if (!validarCampoTexto('telefone', 'Telefone é obrigatório.')) formValido = false;
            if (!validarCampoTexto('nascimento', 'Data de Nascimento é obrigatória.')) formValido = false;
            if (!validarCampoTexto('cep', 'CEP é obrigatório.')) formValido = false;
            if (!validarCampoTexto('endereco', 'Endereço é obrigatório.')) formValido = false;
            if (!validarCampoTexto('cidade', 'Cidade é obrigatória.')) formValido = false;
            if (!validarCampoTexto('estado', 'Estado é obrigatório.')) formValido = false;
            return formValido;
        }

        function validarCampoTexto(idCampo, mensagemErro) {
            const campo = document.getElementById(idCampo);
            const erroSpan = campo ? campo.nextElementSibling : null;
            if (!campo || !erroSpan) return true;
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
            const erroSpan = campo ? campo.nextElementSibling : null;
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
             const erroSpan = campo ? campo.nextElementSibling : null;
             if (!campo || !erroSpan) return true;
             const cpfLimpo = campo.value.replace(/\D/g, '');
             const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
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

        const camposParaValidar = ['nome', 'email', 'cpf', 'telefone', 'nascimento', 'cep', 'endereco', 'cidade', 'estado'];
        camposParaValidar.forEach(id => {
            const campo = document.getElementById(id);
            if (campo) {
                campo.addEventListener('blur', function() {
                    if (id === 'nome') validarCampoTexto(id, 'Nome Completo é obrigatório.');
                    else if (id === 'email') validarEmail(id);
                    else if (id === 'cpf') validarCPF(id);
                    else if (id === 'telefone') validarCampoTexto(id, 'Telefone é obrigatório.');
                    else if (id === 'nascimento') validarCampoTexto(id, 'Data de Nascimento é obrigatória.');
                    else if (id === 'cep') validarCampoTexto(id, 'CEP é obrigatório.');
                    else if (id === 'endereco') validarCampoTexto(id, 'Endereço é obrigatório.');
                    else if (id === 'cidade') validarCampoTexto(id, 'Cidade é obrigatória.');
                    else if (id === 'estado') validarCampoTexto(id, 'Estado é obrigatório.');
                });
                 campo.addEventListener('input', function() {
                    limparErro(campo, campo.nextElementSibling);
                });
            }
        });
        // --- FIM DO CÓDIGO COMPLETO DA VALIDAÇÃO ---
    } // Fim do if(formCadastro)
}

// --- FIM DA VALIDAÇÃO ---


// --- CÓDIGO PARA SINGLE PAGE APPLICATION (SPA) BÁSICO ---

function inicializarSPA() {
    const linksNavegacao = document.querySelectorAll('nav ul li a');
    const mainContent = document.querySelector('main');

    const carregarPagina = async (url) => {
        try {
            // Adiciona uma classe para indicar carregamento (opcional, para feedback visual)
            mainContent.classList.add('carregando'); 

            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const novoMainContent = doc.querySelector('main');
            const novoTitulo = doc.querySelector('title');

            if (novoMainContent && mainContent) {
                mainContent.innerHTML = novoMainContent.innerHTML;
                if (novoTitulo) document.title = novoTitulo.textContent;

                // *** REINICIALIZA AS FUNCIONALIDADES APÓS CARREGAR CONTEÚDO ***
                gerarCardsProjeto();      // Tenta gerar cards (só vai funcionar na pag projetos)
                inicializarModal();       // Tenta inicializar o modal (só vai funcionar na pag projetos)
                inicializarMascaras();    // Tenta inicializar máscaras (só vai funcionar na pag cadastro)
                inicializarValidacaoFormulario(); // Tenta inicializar validação (só vai funcionar na pag cadastro)

            } else {
                 console.error('Conteúdo <main> não encontrado.');
                 window.location.href = url; // Fallback: carrega a página normalmente
            }
        } catch (error) {
            console.error('Falha ao carregar a página via SPA:', error);
            window.location.href = url; // Fallback: carrega a página normalmente
        } finally {
             // Remove a classe de carregamento (opcional)
             mainContent.classList.remove('carregando');
        }
    };

    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = link.getAttribute('href');
            if (url && !url.startsWith('http') && !url.startsWith('#')) {
                event.preventDefault(); 
                carregarPagina(url);
                window.history.pushState({}, '', url); 
            }
        });
    });

    window.addEventListener('popstate', function() {
        // location.pathname pode incluir a barra inicial, removemos se existir
        const path = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
        if (path) { // Só carrega se houver um caminho (evita erro na raiz)
             carregarPagina(path);
        } else {
             carregarPagina('index.html'); // Carrega a home se não houver caminho
        }
    });
}

// --- FIM DO SPA ---


// --- INICIALIZAÇÃO PRINCIPAL ---
// Espera o DOM carregar e chama TODAS as funções de inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarMenuHamburger();
    inicializarSPA(); // SPA precisa ser inicializado logo
    
    // As funções abaixo também serão chamadas pela SPA após carregar conteúdo,
    // mas chamamos aqui para garantir que funcionem no primeiro carregamento.
    gerarCardsProjeto();
    inicializarModal();
    inicializarMascaras();
    inicializarValidacaoFormulario();
});
// --- FIM DA INICIALIZAÇÃO ---
// --- CÓDIGO PARA ROLAGEM SUAVE AO CLICAR NO BOTÃO ---

document.addEventListener('DOMContentLoaded', function() {

    // 1. Encontra o botão pelo ID que criamos
    const botaoRolarDoacao = document.getElementById('btn-rolar-doacao');

    // 2. Encontra a seção de destino pelo ID dela
    const secaoDoacao = document.getElementById('como-doar');

    // 3. Se ambos existirem nesta página...
    if (botaoRolarDoacao && secaoDoacao) {

        // 4. Adiciona um "ouvinte" de clique no botão
        botaoRolarDoacao.addEventListener('click', function() {

            // 5. Manda a seção de destino rolar suavemente para a vista
            secaoDoacao.scrollIntoView({ behavior: 'smooth' });
        });
    }
});