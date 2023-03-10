var vel = 50
if (vel <= 50) {
    console.log('O automóvel está dentro do limite de velocidade')
    console.log('Dirija sempre com cinto de segurança')
} else {
    var valor = vel * 1.25
    var multa = valor.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})
    console.log(`O automóvel está acima do limite de velocidade de 50km/h e receberá uma multa de ${multa}`)
}