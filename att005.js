class Moradia{
constructor(novoId,novoComodos,novoAlugada,novoEndereco){
    this.Id = novoId;
    this.Comodos = novoComodos;
    this.Alugada = novoAlugada;
    this.Endereco = novoEndereco;
}
    liberar(){
this.Alugada == false
    }
    alugar(){
this.Alugada == true
    }
}

class Casa extends Moradia{
    constructor(novoId,novoComodos,novoAlugada,novoEndereco,novoQuintal){
        super(novoId,novoComodos,novoAlugada,novoEndereco)
        this.Quintal = novoQuintal;
    }
    exibir(){
        console.log(`A moradia é uma casa com o ID: ${this.Id} com ${this.Comodos} quartos e um quintal ${this.Quintal}
        está localizada na ${this.Endereco} e a está alugada? ${this.Alugada}`)
    }
}
class Apartamento extends Moradia{
    constructor(novoId,novoComodos,novoAlugada,novoEndereco,novoAndar){
    super(novoId,novoComodos,novoAlugada,novoEndereco)
    this.Andar = novoAndar;
    }
        exibir(){
        console.log(`A moradia é um aparmento com o ID: ${this.Id} com ${this.Comodos} quartos e está no ${this.Andar} andar
        está localizada na ${this.Endereco} e a está alugada? ${this.Alugada}`)
    }
}
let casa1 = new Casa ("001",5,true,"Rua A", "Grande")
let ape1 = new Apartamento ("001",3,false,"Rua B", "7")

casa1.exibir()
console.log(casa1)
ape1.exibir()
console.log(ape1)