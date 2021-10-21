
//var nome = window.alert('Bem vindo ao site do johnny')
//var dinheiro = 724.32
//document.write(`Vou usar um método pra deixar bonitão >>> ${dinheiro.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</br>`)
//document.write(`O nome do fresco que digitou no prompt é "${nome}"`)



function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //var genero = sexo[0].checked ? 'Masculino':'Femenino'
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade<10){
                res.innerHTML=`Detectamos um bebê de ${idade} anos`
            }else if(idade < 22){
                res.innerHTML=`Detectamos um jovem de ${idade} anos`
            }else if(idade < 50){
                res.innerHTML=`Detectamos um adulto de ${idade} anos`
            }else{
                res.innerHTML=`Detectamos um velho de ${idade} anos`
            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade<10){
                res.innerHTML=`Detectamos uma bebê de ${idade} anos`
            }else if(idade < 22){
                res.innerHTML=`Detectamos uma jovem de ${idade} anos`
            }else if(idade < 50){
                res.innerHTML=`Detectamos uma adulta de ${idade} anos`
            }else{
                res.innerHTML=`Detectamos uma velha de ${idade} anos`
            }
        }
    }
}
    function carregar(){
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        var minuto = data.getMinutes()
        var palavra = 'manha'


        if (hora >=0 && hora < 12 ){
            //bom dia
            img.src = 'images/manha.png'
            var palavra = 'manhã'
            document.body.style.background = '#e1b03b'
        }else if (hora >= 12 && hora <18){
            //boa tarde
            img.src = 'images/tarde.png'
            var palavra = 'tarde'
            document.body.style.background = '#d2b485'
        }else{
            //boa noite
            img.src = 'images/noite.png'
            var palavra = 'noite'
            document.body.style.background = '#4a6079'
        }

    msg.innerHTML = `Agora são ${hora}:${minuto} da ${palavra}`
    


    
}


