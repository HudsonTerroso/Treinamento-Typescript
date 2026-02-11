type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(a: StatusRequisicao): string {
    if (a == 'carregando'){
        return "Aguarde... carregando dados."
    }else{
        return ''
    }

}

//console.log(mostrarMensagemStatus('carregando'));


