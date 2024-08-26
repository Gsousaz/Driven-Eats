function selecionarPrato (botaoClicado){
    const botaoSelecionadoAnteriormente = document.querySelector('.refeições .selecionado');
    if (botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    const botao = document.querySelector(botaoClicado);
    botao.classList.add('selecionado');
}


function selecionarBebida (botaoClicado){
    const botaoSelecionadoAnteriormente = document.querySelector('.bebidas .selecionado');
    if (botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    const botao = document.querySelector(botaoClicado);
    botao.classList.add('selecionado');
}

function selecionarSobremesa (botaoClicado){
    const botaoSelecionadoAnteriormente = document.querySelector('.sobremesas .selecionado');
    if (botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }
    const botao = document.querySelector(botaoClicado);
    botao.classList.add('selecionado');
}