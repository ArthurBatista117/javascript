function horas(){
    let h = new Date()
    let horas = h.getHours()
    let min = h.getMinutes()
    const r = document.getElementById('res')
    let img = document.getElementById('imagem')
    let container = document.getElementById('container')
    r.innerHTML = `${horas}:${min}`
    //Tarde
    if(horas > 12 && horas < 18){
        document.body.style.backgroundImage = "linear-gradient(to top, #E9F07F, #F7A265)"
        img.src = "/midia/tarde.png"
    //Noite
    } else if(horas >= 18){
        document.body.style.backgroundImage = "linear-gradient(to top, #015958, #023535)"
        img.src = "/midia/noite.png"
    }
    container.appendChild(img)
}