function contar() {
    let dados = [document.getElementById('txti'), document.getElementById('txtf'), document.getElementById('txtp')]
    let res = document.getElementById('res')
    
    if (dados[0].value.length == 0 || dados[1].value.length == 0 || dados[2].value.length == 0) {
        res.innerHTML = '[IMPOSSÍVEL CONTAR] Faltando: <br> <ul id="Falt"></ul>'
        let txtDados = ['Início', 'Final', 'Passo']
        let list = document.getElementById('Falt')
        for (i = 0; i < dados.length; i++) {
            if (dados[i].value == 0) {
                let li = document.createElement('li')
                li.innerText = `${txtDados[i]}`
                list.appendChild(li)
            }
        }
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(dados[0].value)
        let f = Number(dados[1].value)
        let p = Number(dados[2].value)

        if ( p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if ( i < f) { 
            //contagem progressiva
            for (let c = i; c <= f; c += p) { 
                res.innerHTML += `${c} \u{1f449} `
            }  
        } else { 
            //contagem regressiva
            for (c = i; c >= f; c -= p) { 
                res.innerHTML += `${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}