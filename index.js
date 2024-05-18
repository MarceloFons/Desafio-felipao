console.log("Um reino chamado Fortis")

let moradia = "um Castelo, "
let arma =" Espada "
let armamento = " Canhão "
const heroi = " Castor "
var idade = " 33 "
var crianca = idade - 30 + " anos";
var menoridade = "Jovem";
var maioridade = "Guerreiro";
var adulto = maioridade >= menoridade;
console.log("O reino tem " + moradia + "pequenas moradias, feiras, agricultura e um" + armamento + "para sua defesa")
console.log("Lá nesse reino existe um salvador chamado" + heroi )
console.log("Quando" + heroi + "chegou nesse reino, ele só tinha " + crianca)
console.log("Um andarilho que só tem uma " + arma ) 
console.log("Hoje" + heroi + maioridade + " após anos de luta ele chegou em um momento de reflexão.")
console.log("Aproveitou seu momento e foi a um 'sábio' ao leste de Fortis")
console.log("Fez a seguinte pergunta: ")
console.log("Qual meu ponto de vida atual XP ?")
console.log("O 'sábio' afirmou que com base na sua experiência de batalha, na mente foi revelado um número de 10000")
console.log("Por isso" + heroi + "está no nível de: " )

//if,else if ,else
let XP =  "10000"

if(XP <= 1000){
console.log(" XP Classe Ferro ")
}
else if(XP <= 2000){
console.log("XP Classe Bronze")
}
else if(XP <= 6000){
console.log("XP Classe Prata")
}else if(XP <= 7000){
console.log("XP Classe Ouro")
}
else if(XP <= 8000){
console.log("XP Classe Platina diamante")
}else if(XP <= 9000){
console.log("XP Classe Ascendente")
}
else if(XP <= 10000){
console.log("-XP Classe Imortal-")
}
else if(XP >= 10001){
console.log("XP Classe Radiante")
}
else{
console.log("Verifique o número inserido")
  }
