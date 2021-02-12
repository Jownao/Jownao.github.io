var nome = window.prompt('Qual é o seu nome?')
var dinheiro = 724.32
document.write(`Vou usar um método pra deixar bonitão >>> ${dinheiro.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</br>`)
document.write(`O nome do fresco que digitou no prompt é "${nome}"`)

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
     
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >=0 && hora < 12 ){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e1b03b'
    }else if (hora >= 12 && hora <18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#d2b485'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#4a6079'
    }

}


