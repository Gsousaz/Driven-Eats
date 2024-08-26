let botaoRefeicao, refeicao, preco1;

function selecionarPrato(prato) {
  const clearSelection = document.querySelector(".refeições .selecionado");

  if (clearSelection !== null) {
    clearSelection.classList.remove("selecionado");
  }

  prato.classList.add("selecionado");
  botaoRefeicao = prato.innerHTML;
  refeicao = prato.querySelector('h2');
  preco1 = prato.querySelector("h4").getAttribute("data-price");
  verificaPreenchimento();
}

let botaoBeBida, bebida, preco2;

function selecionarBebida(botaoThisBebida) {
  const clearSelection = document.querySelector(".bebidas .selecionado");
  if (clearSelection !== null) {
    clearSelection.classList.remove("selecionado");
  }

  botaoThisBebida.classList.add("selecionado");
  botaoBeBida = botaoThisBebida.innerHTML;
  bebida = botaoThisBebida.querySelector("h2");
  preco2 = botaoThisBebida.querySelector("h4").getAttribute("data-price");
  verificaPreenchimento();
}

let botaoSobremesa, sobremesa, preco3;

function selecionarSobremesa(botaoThisSobremesa) {
  const clearSelection = document.querySelector(".sobremesas .selecionado");
  if (clearSelection !== null) {
    clearSelection.classList.remove("selecionado");
  }

  botaoThisSobremesa.classList.add("selecionado");
  botaoSobremesa = botaoThisSobremesa.innerHTML;
  sobremesa = botaoThisSobremesa.querySelector("h2");
  preco3 = botaoThisSobremesa.querySelector("h4").getAttribute("data-price");
  verificaPreenchimento();
}

function verificaPreenchimento() {
  if (botaoRefeicao !== undefined) {
    if (botaoBeBida !== undefined) {
      if (botaoSobremesa !== undefined) {
        const habilitarButton = document.querySelector(".fechar-pedido");
        habilitarButton.removeAttribute("disabled");
        habilitarButton.innerHTML = "Fechar Pedido";
        habilitarButton.classList.add("button-selecionado");
        trocarNomes();
      }
    }
  }
}

let valorTotalGlobal

function trocarNomes(){
  const nomeRefeicao = document.querySelector(".nome-refeicao");
  nomeRefeicao.innerHTML = refeicao.innerHTML;
  let valorRefeicao = document.querySelector(".valor-refeicao");
  valorRefeicao.innerHTML = formatarEmReal (preco1)

  const nomeBebida = document.querySelector(".nome-bebida");
  nomeBebida.innerHTML = bebida.innerHTML;
  let valorBebida = document.querySelector(".valor-bebida");
  valorBebida.innerHTML = formatarEmReal(preco2)

  const nomeSobremesa = document.querySelector(".nome-sobremesa");
  nomeSobremesa.innerHTML = sobremesa.innerHTML;

  let valorSobremesa = document.querySelector(".valor-sobremesa");
  valorSobremesa.innerHTML= formatarEmReal(preco3);
  

  let valorTotal = document.querySelector(".valor-total");
  valorTotalGlobal = parseFloat(preco1) + parseFloat(preco2) + parseFloat(preco3);
  valorTotal.innerHTML= formatarEmReal(valorTotalGlobal)
}

function formatarEmReal (num){
  return parseFloat(num).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'} )
}

function fecharPedido() {
  document.querySelector(".confirmar-compra").classList.remove("escondido");
  document.querySelector(".conteudo-total").classList.add("opaco");
}

function whatsapp(){  
  const nome = prompt("Qual o seu nome?");
  const endereco = prompt("Qual o seu endereço?");
  const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${refeicao.innerHTML}\n- Bebida: ${bebida.innerHTML}\n- Sobremesa: ${sobremesa.innerHTML}\nTotal: ${formatarEmReal(valorTotalGlobal)}\nNome: ${nome}\nEndereço: ${endereco}`; 
  const URI = `https://wa.me/5521983767744?text=" ${mensagem}`; 
  const encodedURI = encodeURI(URI)
  window.open(encodedURI)
}

function cancelar(buttonCancelar){
  document.querySelector(".confirmar-compra").classList.add("escondido");
}