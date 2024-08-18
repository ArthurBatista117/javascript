function verificador(){
    let r = document.getElementById('res')
    let txtnasc = document.getElementById('txtnasc')
    const data = new Date()
    const ano = data.getFullYear()
    if(txtnasc.value.length == 0){
        alert('Preencha o campo do ano de nascimento')
    } else{
        let masc = document.getElementsByName('optionsex')[0]
        let femn = document.getElementsByName('optionsex')[1]
        let age = ano - txtnasc.value
        if(masc.checked){
            alert(`cabra macho de ${age} anos`)
        } else if(femn.checked){
            alert(`muie de ${age} anos detectada`)
        }
    }
}