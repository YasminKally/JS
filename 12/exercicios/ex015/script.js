function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fGen = document.getElementsByName('radgen')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fGen[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/hbebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgs/hadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/hidoso.png')
            }
        } else if (fGen[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/mbebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/mjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgs/madulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}