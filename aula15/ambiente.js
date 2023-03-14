let num = ['lanche', 'bebida', 'sobremesa', 'algo', 'amendoim']
num.push(num[0])
console.log(num[5])
console.log(`O vetor tem ${num.length} elementos/chaves/posições`)
num.sort()
/*for (c = 0; c < num.length; c++) {
    console.log(`${num[c]}, `)
}*/
for (let c in num) {
    console.log(`A posição ${c} tem valor ${num[c]}`)
}

if (num.indexOf('sobremesa') != -1) {
    console.log(`O valor "Sobremesa" foi encontrado na posição ${num.indexOf('sobremesa')}`)
} else {
    console.log('O valor "Sobremesa" não existe na Array declarada')
}