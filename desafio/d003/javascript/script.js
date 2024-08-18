function contar(){
    let r = document.getElementById('res')
    let txtinicio = document.getElementById('txtinicio')
    let txtpasso = document.getElementById('txtpasso')
    let txtfim = document.getElementById('txtfim')
    if(txtinicio.value.length == 0 || txtfim.value.length == 0){
        alert('[ERRO] Preencha os campos corretamente')
    } else if(txtpasso.value.length == 0 || txtpasso.value == 0){
        alert('Impossível contar com passo 0, admitindo passo 1')
        txtpasso.value = 1
    } else{
        let inicio = Number(txtinicio.value)
        let passo = Number(txtpasso.value)
        let fim = Number(txtfim.value)
        //Crescente
        if(inicio < fim){
            for(let c = inicio; c <= fim; c += passo){
                r.innerHTML += ` ${c} 👉`
            }
        }
        //Decrescente
        else if(inicio > fim){
            for(let c = inicio; c >= fim; c -= passo){
                r.innerHTML += ` ${c} 👉`
            }
        }
        r.innerHTML += '✅'
    }
}