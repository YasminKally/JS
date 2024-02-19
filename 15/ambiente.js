let num = [5, 8, 9, 3]

num.push(7) // adiciona um valor na próxima posição do vetor
console.log(`Comprimento do array: ${num.length}`)

/*percurso em vetor comum
for (i = 0; i < num.length; i++) {
    console.log(`Valor da posição ${i}: ${num[i]}`)
}
*/

//percurso em vetor simples
for (pos in num) {
    console.log(`Valor da posição ${pos}: ${num[pos]}`)
}

console.log(`Posicão do valor 8: ${num.indexOf(8)}`)
console.log(`Valores em ordem crescente: ${num.sort()}`)
console.log(`Posicão do valor 8: ${num.indexOf(8)}`)