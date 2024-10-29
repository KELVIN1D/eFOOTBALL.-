function criaCartao(pergunta, resposta){
    let conteudo = document.getElementById('conteudo')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao--conteudo">
    <div class="cartao--pergunta"><p>${pergunta}</p></div>
    <div class="cartao--resposta"><p>${resposta}</p></div>
    </div>
    
    `
    console.log(cartao)
    conteudo.appendChild(cartao)

    function viraCartao(){
        repostaEstaVisivel = !repostaEstaVisivel
        cartao.classList.toggle('active' , respotaEstaVisivel)

    }
    cartao.addEventListener('click' , viraCartao)
    
    conteudo.appendChild(cartao)
}