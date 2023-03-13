sex = 'nulo'
function valorfem() {
    sex = 'f'
    return sex
}

function valormasc() {
    sex = 'm'
    return sex
}

function verificar() {
    var txtano = document.getElementById('iano').value
    var ano = Number(txtano)
    var data = new Date()
    var txtanoatual = data.getFullYear()
    var anoatual = Number(txtanoatual)
    var idade = anoatual - ano
    var dados = document.getElementById('pessoa')
    var faixaetaria = 'nulo'
    var imagem = document.getElementById('img')
    if (ano >= anoatual || sex == 'nulo' || ano < 0) {
        window.alert('[ERRO] Dados inválidos, verifique os dados inseridos')
    } else {
        document.getElementById('frasefinal').innerText = 'Desenvolvido por Giovanni Novais'
        if (idade < 13) { //faixa etária//
            faixaetaria = 'criança'
        } else if (idade < 30) {
            faixaetaria = 'jovem'
        } else if (idade < 65) {
            faixaetaria = 'adulto'
        } else {
            faixaetaria = 'idoso'
        }
        imagem.style.backgroundPosition = 'top left'
        if (sex == 'f') {
            switch (faixaetaria) {
                case 'criança':
                    document.getElementById('res').innerHTML = `Foi detectada uma <strong>menina</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/f-crianca.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    imagem
                    break
                case 'jovem':
                    document.getElementById('res').innerHTML = `Foi detectada uma <strong>jovem</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/f-jovem.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    break
                case 'adulto':
                    document.getElementById('res').innerHTML = `Foi detectada uma <strong>adulta</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/f-jovem.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    imagem.style.backgroundPosition = 'center center'
                    break
                case 'idoso':
                    document.getElementById('res').innerHTML = `Foi detectada uma <strong>idosa</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/f-idosa.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    break
            }
        } else {
            switch (faixaetaria) {
                case 'criança':
                    document.getElementById('res').innerHTML = `Foi detectada um <strong>menino</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/m-crianca.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    imagem.style.backgroundPosition = 'bottom left'
                    break
                case 'jovem':
                    document.getElementById('res').innerHTML = `Foi detectada um <strong>jovem</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/m-jovem.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    break
                case 'adulto':
                    document.getElementById('res').innerHTML = `Foi detectada um <strong>adulto</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/m-jovem.jpg)'
                    imagem.style.backgroundSize = 'cover'
                    break
                case 'idoso':
                    document.getElementById('res').innerHTML = `Foi detectada um <strong>idoso</strong> de ${idade} anos.`
                    imagem.style.backgroundImage = 'url(imagens/m-idoso.jpg)'
                    imagem.style.backgroundSize = 'cover'
            }
        }
        document.getElementById('pessoa').style.display = 'block'
    }
}