let botaoRefeicao;

function selecionarPrato (prato){
    const clearSelection = document.querySelector('.refeições .selecionado', );
   

    if (clearSelection !== null){
        clearSelection.classList.remove('selecionado');
    }

    prato.classList.add('selecionado');
    botaoRefeicao = prato.innerHTML;
    verificaPreenchimento ()
}

let botaoBeBida;

function selecionarBebida (botaoThisBebida){
    const clearSelection = document.querySelector('.bebidas .selecionado');
    if (clearSelection !== null){
        clearSelection.classList.remove('selecionado')
    }

    botaoThisBebida.classList.add('selecionado');

    botaoBeBida = botaoThisBebida.innerHTML;
    verificaPreenchimento ()
}

let botaoSobremesa;

function selecionarSobremesa (botaoThisSobremesa){
    const clearSelection = document.querySelector('.sobremesas .selecionado');
    if (clearSelection !== null){
        clearSelection.classList.remove('selecionado')
    }
    botaoThisSobremesa.classList.add('selecionado');
    botaoSobremesa = botaoThisSobremesa.innerHTML;
    verificaPreenchimento ()
}

function verificaPreenchimento (){
    if (botaoRefeicao !== undefined){
       if (botaoBeBida !== undefined){
        if (botaoSobremesa !== undefined){
            const habilitarButton = document.querySelector('.fechar-pedido')
            habilitarButton.removeAttribute('disabled')
            habilitarButton.innerHTML = "Finalizar Pedido";
            habilitarButton.classList.add('button-selecionado')    
        }
        }
    }
}

function mostrarIcon(){
    
        
    
}