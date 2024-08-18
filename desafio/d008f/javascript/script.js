let nums = document.querySelector('select#number')
let r = document.querySelector('div#res')
let val = document.querySelector('input#txtn')
let array = []

isnum = (n) => {
    if (val.value >= 1 && val.value <= 100) {
        return true
    } else {
        return false
    }
}

inlist = (list, n) => {
    if (list.indexOf(Number(n.value)) == -1) {
        return true
    } else {
        return false
    }
}

adicionar = () => {
    let n = Number(val.value)
    if (isnum(val) && inlist(array, val)) {
        array.push(n)
        op = document.createElement('option')
        op.text = `Valor ${n} adicionado`
        nums.appendChild(op)
    } else {
        alert('Valor inválido ou já existente na lista')
    }
    val.value = ''
    val.focus()
}

end = () => {
    let mai = array[0]
    let min = array[0]
    let med = 0
    let s = 0
    let cont = 0
    for (let v of array) {
        cont++
        s += v
        med = s / cont
        if (v > mai) {
            mai = v
        }
        if (v < min) {
            min = v
        }
    }

    r.innerHTML += `Foram adicionados ${cont} números <br>` 
    r.innerHTML += `Maior número: ${mai} <br>` 
    r.innerHTML += `Menor número: ${min} <br>`
    r.innerHTML += `A soma desse números é ${s} <br>` 
    r.innerHTML += `A média desse números é ${med}`
}
