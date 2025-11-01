# Projeto ONG Laços de Ouro (ADS - Entrega IV)

Este é o projeto final da Experiência Prática IV, um site para a ONG "Laços de Ouro" focado em acessibilidade e boas práticas de desenvolvimento.

**Autor:** JULIA MELO

---

## 🚀 Tecnologias Usadas

* **HTML5:** Para a estrutura do site.
* **CSS3:** Para a estilização, usando variáveis para facilitar a mudança de temas (como o Modo Escuro).
* **JavaScript:** Para toda a interatividade do site, como o menu, o modal de doação e a navegação SPA.

---

## ✅ O que foi feito na Entrega IV

Segui todos os requisitos pedidos para esta entrega:

### 1. Acessibilidade (WCAG 2.1)

O site foi ajustado para ser fácil de usar por todos:

* **Modo Escuro:** Criei um botão no cabeçalho que troca o site inteiro para um tema escuro com bom contraste.
* **Navegação pelo Teclado:** Garanti que todos os links e botões podem ser usados só com a tecla "Tab" e mostram um contorno azul claro (`:focus`) para o usuário saber onde está.
* **Leitores de Tela (Atributos ARIA):**
    * O **menu hambúrguer** agora avisa o leitor de tela se está "aberto" ou "fechado" (`aria-expanded`).
    * O **modal de doação** avisa que é um "diálogo" (`role="dialog"`) e "prende" o foco do teclado dentro dele. Também pode ser fechado com a tecla 'Esc'.

### 2. Otimização para Produção

Para o site carregar mais rápido, todos os arquivos principais foram "espremidos" (minificados):

* `style.min.css` (arquivo CSS minificado)
* `script.min.js` (arquivo JavaScript minificado)
* `index.html`, `projetos.html`, `cadastro.html` (arquivos HTML minificados)
* As imagens `.jpg` foram convertidas para o formato `.webp` (que é bem mais leve).

### 3. Git e GitHub (Fluxo de Trabalho)

Todo o trabalho foi organizado usando o GitFlow:

* **Branches:** O repositório tem a branch `main` (para a versão final) e a `develop` (para o trabalho do dia-a-dia).
* **Feature Branches:** Criei galhos separados para cada tarefa nova (ex: `feature/minificar-js`).
* **Pull Requests:** Usei Pull Requests com descrição para juntar (dar *merge*) as *features* de volta na branch `develop`.
* **Issues:** Usei as "Issues" do GitHub para organizar as tarefas que faltavam.
* **Versionamento:** O projeto final foi marcado com a tag **`v1.0.0`** para indicar a versão de entrega.
