function gerar(){
   let nl =[document.querySelector('input.num'),document.querySelector('select.lista')]
    var n = Number(nl[0].value)
    if(nl[0].value.length == 0){
        window.alert ('Por favor, digite um número!')

    }else{
        nl[1].innerHTML = ''
        for(var c =1; c <=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //item.value = `lista ${c}` item selecionado
            nl[1].appendChild(item)
        }
        

    }
        
    
}