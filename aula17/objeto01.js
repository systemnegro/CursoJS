let amigo = {nome:'Vaca',
sexo:'Feminino',
peso:50.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p

}}
amigo.engordar()
console.log(`${amigo.nome} engordou ${amigo.peso}kg`)
