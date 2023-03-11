var id = 78
if (id >= 18 && id < 65) {
    console.log('Voto obrigatório')
} else if (16 <= id || id >= 65) {
        console.log('Voto opcional')
    } else {
        console.log('Inapto para votar')
    }