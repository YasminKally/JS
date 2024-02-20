let amigo = {
    nome: 'José',
    genero: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p //this se refere ao objeto atual
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)