function verificar() {
    var txtano = document.getElementById('iano').value
    var ano = Number(txtano)
    var sex = document.getElementById('sex').value
    var data = new Date()
    var txtanoatual = data.getFullYear()
    var anoatual = Number(txtanoatual)
    var idade = anoatual - ano
    var dados = document.getElementById('dados')
    dados.style.display = 'block'
    
}