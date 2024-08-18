tabuada = () =>{
    let txtn = document.getElementById('txtn1')
    let t = document.getElementById('tab')
    let n = Number(txtn.value)
    t.innerText = 'Tabuada'
    for(let c = 0; c <= 10; c++){
        let op = document.createElement('option')
        op.innerHTML += `${n} x ${c} = ${n*c}`
        t.appendChild(op)
    }
}