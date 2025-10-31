// --- DADOS GLOBAIS (Exemplo para Templates) ---
const projetos = [
    {
        id: 'clube-leitura', // ID para o link #
        titulo: 'Clube da Leitura',
        imagem: 'imagens/projeto-leitura.webp',
        alt: 'Voluntária lendo um livro em voz alta para um grupo de idosos atentos.',
        descricao: 'Sessões semanais de leitura em voz alta, trazendo os mundos da literatura para quem tem dificuldade de ler.',
        tag: 'Leitura',
        tagClasse: 'tag-leitura',
        frequencia: 'Todas as terças-feiras, 14h',
        local: 'Casas de repouso parceiras (Zona Leste)',
        objetivo: 'Estimular a imaginação e combater a solidão.'
    },
    {
        id: 'tardes-jogos', // ID para o link #
        titulo: 'Tardes de Jogos',
        imagem: 'imagens/projeto-jogos.webp',
        alt: 'Um senhor e uma jovem sorrindo enquanto jogam uma partida de xadrez.',
        descricao: 'Estimulamos a mente e a interação social com jogos de tabuleiro como xadrez, damas e baralho. A competição é amigável!',
        tag: 'Jogos',
        tagClasse: 'tag-jogos',
        frequencia: 'Quinzenalmente, às quintas-feiras, 15h',
        local: 'Centro Comunitário Vila Esperança',
        objetivo: 'Exercitar a cognição e promover novas amizades.'
    }
    // Poderíamos adicionar mais objetos aqui para simular mais projetos
];

// --- FIM DOS DADOS GLOBAIS ---


// --- DEFINIÇÃO DE TODAS AS FUNÇÕES DE INICIALIZAÇÃO ---

function gerarCardsProjeto() {
    const containerProjetos = document.getElementById('lista-de-projetos');
    if (!containerProjetos) return;
    containerProjetos.innerHTML = '';

    projetos.forEach(projeto => {
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
        containerProjetos.innerHTML += cardHTML;
    });
}

function inicializarMenuHamburger() {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const nav = document.querySelector('nav');

    if (menuHamburger && nav) {
        menuHamburger.addEventListener('click', function () {
            nav.classList.toggle('menu-aberto'); // Use o nome da classe que seu CSS espera (ex: 'menu-aberto' ou 'ativo')
        });
    }
}

// --- FUNÇÃO PARA INICIALIZAR O MODAL DE DOAÇÃO (Versão Acessível) ---
function inicializarModal() {
    const botoesAbrirModal = document.querySelectorAll('#abrir-modal-doacao, #abrir-modal-doacao-home');
    const botaoFecharModal = document.getElementById('fechar-modal');
    const modal = document.getElementById('modal-doacao');

    if (!modal || botoesAbrirModal.length === 0 || !botaoFecharModal) {
        // Se os elementos essenciais não estiverem na página, não faz nada.
        return; 
    }

    let botaoQueAbriuOModal = null; // Variável para guardar quem abriu

    // Função para ABRIR o modal
    const abrirModal = (botaoClicado) => {
        botaoQueAbriuOModal = botaoClicado; // Guarda o botão que foi clicado
        modal.classList.add('modal-aberto');
        
        // Move o foco do teclado para dentro do modal (ex: para o botão de fechar)
        botaoFecharModal.focus(); 
    };

    // Função para FECHAR o modal
    const fecharModal = () => {
        modal.classList.remove('modal-aberto');
        
        // Devolve o foco para o botão que abriu o modal
        if (botaoQueAbriuOModal) {
            botaoQueAbriuOModal.focus();
        }
    };

    // Adiciona o evento em CADA botão de abrir
    botoesAbrirModal.forEach(botao => {
        botao.addEventListener('click', () => abrirModal(botao)); // Passa o 'botao' como argumento
    });

    // Adiciona o evento no botão de fechar
    botaoFecharModal.addEventListener('click', fecharModal);

    // Adiciona o evento para fechar clicando fora
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            fecharModal();
        }
    });

    // Adiciona o evento para fechar com a tecla "Escape"
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('modal-aberto')) {
            fecharModal();
        }
    });
}
// --- FIM DO MODAL ---

function inicializarMascaras() {
    if (typeof IMask !== 'undefined') {
        const cpfInput = document.getElementById('cpf');
        const telInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        if (cpfInput) IMask(cpfInput, { mask: '000.000.000-00' });
        if (telInput) IMask(telInput, { mask: '(00) 00000-0000' });
        if (cepInput) IMask(cepInput, { mask: '00000-000' });
    } else {
        console.warn("Biblioteca IMask não encontrada. Máscaras não serão aplicadas.");
    }
}

function inicializarValidacaoFormulario() {
    const formCadastro = document.getElementById('form-cadastro');
    if (!formCadastro) return; // Se não há formulário, não faz nada

    // --- Funções Auxiliares de Validação (Internas) ---
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

    // --- "Ouvintes" de Eventos ---
    formCadastro.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = validarFormularioCompleto();
        if (isValid) {
            alert('Cadastro enviado com sucesso! (Simulação)');
            formCadastro.reset();
        } else {
            alert('Por favor, corrija os erros no formulário.');
        }
    });

    const camposParaValidar = ['nome', 'email', 'cpf', 'telefone', 'nascimento', 'cep', 'endereco', 'cidade', 'estado'];
    camposParaValidar.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) {
            campo.addEventListener('blur', function () {
                if (id === 'nome') validarCampoTexto(id, 'Nome Completo é obrigatório.');
                else if (id === 'email') validarEmail(id);
                else if (id === 'cpf') validarCPF(id);
                else if (id === 'telefone') validarCampoTexto(id, 'Telefone é obrigatório.');
                else if (id === 'nascimento') validarCampoTexto(id, 'Data de Nascimento é obrigatória.');
                else if (id === 'cep') validarCampoTexto(id, 'CEP é obrigatório.');
                else if (id === 'endereco') validarCampoTexto(id, 'Endereço é obrigatório.');
                else if (id === 'cidade') validarCampoTexto(id, 'Cidade é obrigatória.');
                else if (id === 'estado') validarCampoTexto(id, 'Estado é obrigatória.');
            });
            campo.addEventListener('input', function () {
                limparErro(campo, campo.nextElementSibling);
            });
        }
    });
}

function inicializarSPA() {
    const linksNavegacao = document.querySelectorAll('nav ul li a');
    const mainContent = document.querySelector('main');
    if (!mainContent) return; // Se não houver <main>, não faz nada

    const carregarPagina = async (url) => {
        try {
            mainContent.classList.add('carregando'); // Feedback visual
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const novoMainContent = doc.querySelector('main');
            const novoTitulo = doc.querySelector('title');

            if (novoMainContent) {
                mainContent.innerHTML = novoMainContent.innerHTML;
                if (novoTitulo) document.title = novoTitulo.textContent;

                // *** REINICIALIZA TODAS AS FUNCIONALIDADES ***
                gerarCardsProjeto();
                inicializarModal();
                inicializarMascaras();
                inicializarValidacaoFormulario();
                inicializarRolagemSuave(); // Garante que o botão de rolagem funcione
                inicializarModoEscuro(); // Garante que o botão de tema funcione
            } else {
                window.location.href = url; // Fallback
            }
        } catch (error) {
            console.error('Falha ao carregar a página via SPA:', error);
            window.location.href = url; // Fallback
        } finally {
            mainContent.classList.remove('carregando');
        }
    };

    linksNavegacao.forEach(link => {
        link.addEventListener('click', function (event) {
            const url = link.getAttribute('href');
            if (url && !url.startsWith('http') && !url.startsWith('#')) {
                event.preventDefault();
                carregarPagina(url);
                window.history.pushState({}, '', url);
            }
        });
    });

    window.addEventListener('popstate', function () {
        const path = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
        carregarPagina(path || 'index.html'); // Carrega a home se não houver caminho
    });
}

function inicializarRolagemSuave() {
    const botaoRolarDoacao = document.getElementById('btn-rolar-doacao');
    const secaoDoacao = document.getElementById('como-doar');

    if (botaoRolarDoacao && secaoDoacao) {
        botaoRolarDoacao.addEventListener('click', function () {
            secaoDoacao.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function inicializarModoEscuro() {
    const switchTema = document.getElementById('switch-tema');
    if (!switchTema) return; // Se o interruptor não existir nesta página, não faz nada

    switchTema.addEventListener('change', function () {
        document.body.classList.toggle('modo-escuro');
    });
}


// --- INICIALIZAÇÃO PRINCIPAL (ÚNICA) ---
// Espera o DOM carregar e chama TODAS as funções de inicialização
document.addEventListener('DOMContentLoaded', function () {
    inicializarMenuHamburger();{
    const menuHamburger = document.querySelector('.menu-hamburger');
    const nav = document.querySelector('#menu-principal'); // Agora pegamos pelo ID!

    if (menuHamburger && nav) {
        menuHamburger.addEventListener('click', function () {
            // 1. Abre/Fecha o menu visual
            // (Verifique no seu CSS se a classe é 'menu-aberto' ou 'ativo')
            nav.classList.toggle('ativo') 

            // 2. Verifica se o menu está aberto
            const estaAberto = nav.classList.contains('menu-aberto');

            // 3. Atualiza os atributos ARIA para o leitor de tela
            if (estaAberto) {
                // Menu ABRIU
                menuHamburger.setAttribute('aria-expanded', 'true');
                menuHamburger.setAttribute('aria-label', 'Fechar menu');
            } else {
                // Menu FECHOU
                menuHamburger.setAttribute('aria-expanded', 'false');
                menuHamburger.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }
}
    inicializarSPA(); 
    
    // Chamadas iniciais para a primeira página carregada
    gerarCardsProjeto();
    inicializarModal();
    inicializarMascaras();
    inicializarValidacaoFormulario();
    inicializarRolagemSuave();
    inicializarModoEscuro();
});
// --- FIM DO SCRIPT ---