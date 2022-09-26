function carregar(){
    var msg = window.document.querySelector('div.msg')
    var img = window.document.querySelector('img.imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e1bb93'
    }else if ( hora >= 12 && hora <18){
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background ='#792d17'
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#303030'
    } 
    
    
} 