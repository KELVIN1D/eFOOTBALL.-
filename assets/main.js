function criaCartao(pergunta, resposta){
    let conteudo = document.getElementById('conteudo')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao--conteudo">
    <div class="cartao--pergunta"><p>${pergunta}</p><
    <div class="cartao--resposta"><p>${resposta}</p><
    </div>
    
    `
    console.log(cartao)
    conteudo.appendChild(cartao)

    





}