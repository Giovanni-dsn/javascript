numero = 4

function parouimpar(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(`O valor ${numero} é ${parouimpar(numero)}`)