function contar(){
    let ifp =[document.querySelector('input.ini'),document.querySelector('input.fim'),document.querySelector('input.pass')]
    let num =[Number(ifp[0].value),Number(ifp[1].value),Number(ifp[2].value)]
    var res = window.document.querySelector('div.res')
    res.innerHTML = 'Contando:<br>'
    if(ifp[0].value.length == 0 || ifp[1].value.length == 0){
        window.alert('[ERRO] algo deu errado! preencha os campo corretamente!')
        res.innerHTML = 'Impossivel contar!'
    }else if( ifp[2].value <= 0 ){
        window.alert('Passo invalido! Considerando PASSO 1')
        ifp[2].value = 1
        res.innerHTML = 'Tente Novamente'
        // Contagem crescente
    }else if (num[0] < num[1]){
        for(num[0];num[0]<=num[1];num[0]+=num[2]){
            res.innerHTML += ` ${num[0]} \u{1F449}`
            
        }
        res.innerHTML += `\u{1f3c1}`
    // Contagem regressiva
    }else {
        for(num[0];num[0]>=num[1];num[0]-=num[2]){
            res.innerHTML += `${num[0]} \u{1f449}`
           
            
        }
        res.innerHTML += `\u{1f3c1}`
    }  
   

  

}