let numeros = [-10, 20, 30, 40, 50];

let res = numeros.filter(positivos) 
console.log(res)

function positivos(numeros) {
  return numeros >= 0;
}

let residencias1 = {
    tipo: "casa",
    comodos: "4",
    endereco: "Rua A",
    vendida: true,
situacaoa : function (){
return ("moradaia do tipo " + this.tipo + " com " + this.comodos + " cômodos,no endereço " + this.endereco);
    }
}
let residencias2 = {
    tipo: "Apartamento",
    comodos: "2",
    endereco: "Rua B",
    vendida: false,
    situacaob : function (){
        return ("moradaia do tipo " + this.tipo + " com " + this.comodos + " cômodos,no endereço " + this.endereco);
    }
}
let residencias3 = {
    tipo: "Apartamento",
    comodos: "3",
    endereco: "Rua C",
    vendida: false,
    situacaoc : function (){
        return ("moradaia do tipo " + this.tipo + " com " + this.comodos + " cômodos,no endereço " + this.endereco);
    }
}
//let tudob = residencias3.situacaoc();   
//let tudoa = residencias2.situacaob();   
let tudo = residencias1.situacaoa();
console.log(tudo)

let Identificadorresidencias = []
Identificadorresidencias.push(residencias1)
Identificadorresidencias.push(residencias2)
Identificadorresidencias.push(residencias3)

Identificadorresidencias.forEach(listarDisponiveis)
//let filtro = Identificadorresidencias.filter(listarDisponiveis)

function listarDisponiveis(elemento){
if(elemento.vendida == false){
   console.log(`A moradia é do tipo: ${elemento.tipo}`)
   console.log(`Tem ${elemento.comodos} comodos`)
   console.log(`Endereco ${elemento.endereco}`)
   console.log(`A situacao é: ${elemento.vendida}`)
        console.log("moradaia do tipo " + elemento.tipo + " com " + elemento.comodos + " cômodos,no endereço " + elemento.endereco);
    }return listarDisponiveis;
}