let num = document.getElementById('fNum')
let lista = document.getElementById('fLista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n))  != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(num)
        let opt = document.createElement('option')
        opt.innerText = `Valor ${valores[valores.indexOf(num)].value} adicionado`
        lista.appendChild(opt)
    } else {
        window.alert('Valor inválido ou já adicionado')
    }
}