// FUNÇÃO PARA ALTERNAR ENTRE OS TEMAS PADRÃO E MODO ESCURO

const botaoAlterarTema = document.getElementById("botao-alterar-tema"); // JavaScript pega o elemento no HTML pelo ID

const body = document.querySelector("body"); // JavaScript pega o elemento no HTML pela TAG <body>

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao") // JavaScript pega o elemento no HTML pela classe "imagem-botao"

botaoAlterarTema.addEventListener("click", () => {


    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
        imagemBotaoTrocaDeTema.setAttribute("alt", "imagem do sol")

    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
        imagemBotaoTrocaDeTema.setAttribute("alt", "imagem da lua");

    }

});
