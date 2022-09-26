let liu = {num:document.querySelector('input.numxt'), lista:document.querySelector('select.lista'),res:document.querySelector('div.res')}
/*
var num = document.querySelector('input.numxt')
var ilista = document.querySelector('select.lista')6
var res = document.querySelector('div,res')
*/
let valores = []

function numero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function lista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(numero(liu.num.value) && !lista(liu.num.value, valores)){
       valores.push(Number(liu.num.value))
       var item = document.createElement('option')
       item.text = `O valor ${liu.num.value} adicionado`
       liu.lista.appendChild(item)
       liu.res.innerHTML =''
        
    }else{
        alert('[ERRO] Número invalido ou já está na lista')
      

    }
    liu.num.value = ''
    liu.num.focus()
 
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior)
                maior = valores[pos]
            if(valores[pos]< menor)
                menor = valores[pos]
        }
        media = soma / total


        liu.res.innerHTML = ''
        liu.res.innerHTML += `<p>Ao todo, temos um total de ${total} de números adicionados. </p>`
        liu.res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        liu.res.innerHTML += `O menor valor informado foi ${menor}.`
        liu.res.innerHTML += `<p>A soma entre os valores é ${soma}.</p>`
        liu.res.innerHTML += `<p>A média dos valores é ${media}.</P>`
        

    }
}


/*
function finalizar(){
    alert('koe')
}
function adicionar(){
    let num_list = [document.querySelector('input.numxt'),document.querySelector('select.lista')]
    var n = Number(num_list[0].value)
    let nt = []
    nt.push(n)
    
    if(num_list[0].value == 0 || num_list[0].value <=0 || num_list[0].value >100 || num_list[1].indexOf(num_list[0]) != -1 ){
       alert('[ERRO] Por Favor adicione um número de 1 a 100')

    }else{
        var item = document.createElement('option')
        item.text = nt
        num_list[1].appendChild(item)

    }
      

    
    
  
}
*/