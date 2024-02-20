let num = document.getElementById('fNum')
let lista = document.getElementById('fLista')
let res = document.getElementById('res')
let valores = []

function isNum(n) { //checa se o número está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) { //checa se o valor está no array
    if (l.indexOf(Number(n))  != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value)) //adiciona como number o valor do input
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado` //valor adicinado como option
        lista.appendChild(opt) //option adicionado a lista
        console.log(valores)
    } else {
        window.alert('Valor inválido ou já adicionado')
    }
    num.value = '' //esvazia o input
    num.focus() //coloca o cursor de texto no input
    res.innerHTML = ''
}

function maValor(l) {
    let maior = Math.max(...l)
    return maior
}

function miValor(l) {
    let menor = Math.min(...l)
    return menor
}

function soma(l) {
    let s = 0
    for (i = 0; i < l.length; i++) {
        s += l[i]
    }
    return s
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        lista.innerHTML = '' //limpa a lista
        res.innerHTML += `<br> ${valores.length} valores adicionados <br>`
        res.innerHTML += `Maior valor adicionado: ${maValor(valores)} <br>`
        res.innerHTML += `Menor valor adicionado: ${miValor(valores)} <br>`
        res.innerHTML += `Soma dos valores adicionados: ${soma(valores)} <br>`
        res.innerHTML += `Média dos valores adicionados: ${soma(valores) / valores.length}`
        valores = [] //apaga os valores do array
    }
}