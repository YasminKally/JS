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

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} valores adicionados</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}