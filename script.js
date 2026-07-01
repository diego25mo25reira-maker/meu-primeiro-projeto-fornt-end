// Garante que o JavaScript só vai rodar DEPOIS que todo o HTML for carregado
document.addEventListener("DOMContentLoaded", function() {

    /* ==========================================================================
       EFETIO INTERATIVO 1: Saudação Dinâmica por Horário (Home)
       ========================================================================== */
    const elementoSaudacao = document.getElementById("boas-vindas");
    
    // O "if" garante que o código só roda na página que tem esse elemento (Home)
    if (elementoSaudacao) {
        const horaAtual = new Date().getHours(); // Pega a hora real do sistema
        
        if (horaAtual < 12) {
            elementoSaudacao.innerText = "Bom dia! Seja bem-vindo ao meu portfólio.";
        } else if (horaAtual < 18) {
            elementoSaudacao.innerText = "Boa tarde! Seja bem-vindo ao meu portfólio.";
        } else {
            elementoSaudacao.innerText = "Boa noite! Seja bem-vindo ao meu portfólio.";
        }
    }

    /* ==========================================================================
       EFEITO INTERATIVO 2: Alternador de Tema (Dark Mode Global)
       ========================================================================== */
    const botaoTema = document.getElementById("btn-tema");
    
    if (botaoTema) {
        botaoTema.addEventListener("click", function() {
            // O "toggle" adiciona a classe se ela não existir, e remove se existir
            document.body.classList.toggle("dark-mode");
            
            // Muda o texto do botão para o usuário saber o que vai acontecer no próximo clique
            if (document.body.classList.contains("dark-mode")) {
                botaoTema.innerText = "Alternar Tema Claro";
            } else {
                botaoTema.innerText = "Alternar Tema Escuro";
            }
        });
    }

    /* ==========================================================================
       VALIDAÇÃO OBRIGATÓRIA: Formulário de Contato
       ========================================================================== */
    const formulario = document.getElementById("form-contato");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Intercepta e impede o comportamento padrão de atualizar a página ao enviar
            evento.preventDefault();

            // Captura os valores digitados pelos usuários e limpa espaços vazios (.trim)
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Captura os campos onde vamos exibir as mensagens de erro
            const erroNome = document.getElementById("erro-nome");
            const erroEmail = document.getElementById("erro-email");
            const erroMensagem = document.getElementById("erro-mensagem-texto");
            const caixaSucesso = document.getElementById("sucesso-mensagem");

            // Reseta todas as mensagens de erro antes de validar novamente
            erroNome.innerText = "";
            erroEmail.innerText = "";
            erroMensagem.innerText = "";
            caixaSucesso.className = "sucesso-oculto";
            caixaSucesso.innerText = "";

            let formularioValido = true;

            // Validação do campo Nome
            if (nome === "") {
                erroNome.innerText = "O campo Nome Completo é obrigatório.";
                formularioValido = false;
            }

            // Validação do campo E-mail (Verifica se está vazio ou se não tem "@")
            if (email === "") {
                erroEmail.innerText = "O campo E-mail é obrigatório.";
                formularioValido = false;
            } else if (!email.includes("@")) {
                erroEmail.innerText = "Por favor, insira um e-mail válido contendo '@'.";
                formularioValido = false;
            }

            // Validação do campo Mensagem
            if (mensagem === "") {
                erroMensagem.innerText = "Por favor, digite sua mensagem.";
                formularioValido = false;
            }

            // Se tudo estiver preenchido corretamente
            if (formularioValido) {
                caixaSucesso.innerText = `Obrigado, ${nome}! Sua mensagem foi validada e enviada com sucesso.`;
                caixaSucesso.className = "sucesso-visivel";
                formulario.reset(); // Limpa os campos do formulário para o usuário
            }
        });
    }
});