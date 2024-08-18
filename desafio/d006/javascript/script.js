converter = () =>{
    //Declaração
    let txttemp = document.getElementById('txttemp')
    let r = document.getElementById('res')
    let temp = Number(txttemp.value)
    //Conversão
    let fah = temp * 1.8 + 32
    let kel = 273.15 + temp
    //Exibição
    r.innerHTML = `<p>${temp}Cº em Kelvin: ${kel} </p>`
    r.innerHTML += `<p>${temp}Cº em Fahrenheit: ${fah}</p>`
}