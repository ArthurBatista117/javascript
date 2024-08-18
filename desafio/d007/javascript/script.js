desconto = () =>{
    let txtpre = document.getElementById('txtpre')
    let txtdes = document.getElementById('txtdes')
    let r = document.getElementById('res')
    let pre = Number(txtpre.value)
    let des_r = Number(txtdes.value)

    let des = des_r / 100
    let pre_des = (pre * (des - 1)) * -1
    
    r.innerHTML = `<p>Após um desconto de ${des_r}%...</p>`
    r.innerHTML += `<p>Seu produto passará a valer ${pre_des}</p>`
}