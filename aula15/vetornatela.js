let valores = [5,2,7,8,1,9]

//console.log(valores)
/*
for(let pos = 0; pos <valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}