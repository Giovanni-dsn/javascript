function contar() {
    var txtinicio = document.getElementById('inicio').value
    var txtfim = document.getElementById('fim').value
    var txtpasso = document.getElementById('passo').value
    var inicio = Number(txtinicio)
    var fim = Number(txtfim)
    var passo = Number(txtpasso)
    var res = document.getElementById('res')
    res.innerText = ''
    if (passo <= 0 || inicio == fim) {
        window.alert('[ERRO] Dados inválidos. O passo é igual a 0 ou Inicio e Fim são iguais.')
    } else {
        if (inicio < fim) {
            for (a = inicio;a <= fim; a += passo) {
                if (a != fim) {
                    res.innerText += ` ${a} >>`
                } else {
                    res.innerText += `${a} \u{1F3C1}` 
                }
            }
        } else {
            for (a = inicio;a >= fim; a -= passo) {
                if (a != fim) {
                    res.innerText += ` ${a} >>`
                } else {
                    res.innerText += `${a} \u{1F3C1}` 
                }
            }
        }
    }
}