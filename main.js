let vitorias = 0
let derrotas = 0
let resultadoDeVitorias = 0
let rank = " "

for (let i=0;i<10;i++){
  main() // aqui ele chama quase todas as funções
  // aqui ele verificará a quantidade de vezes que o iterator rodou para definir qual mensagem mostrar:
  if(i<9){
    exibeMensagem()
  } else {
    exibeMensagemFinal()
  }
}

function perguntaVitorias(){
  vitorias = prompt("Digite a quantidade de vitórias para o cálculo: ")
}

function perguntaDerrotas(){
  derrotas = prompt("Digite a quantidade de derrotas para o cálculo: ")
}

function calculoDeVitorias(vitorias, derrotas){
  resultadoDeVitorias = vitorias - derrotas
  return resultadoDeVitorias
}

function calculoDeRank(resultadoDeVitorias) {
  if (resultadoDeVitorias <= 10) {
    rank = "Ferro"
  } else if (resultadoDeVitorias >= 11 && resultadoDeVitorias <= 20) {
    rank = "Bronze"
  } else if (resultadoDeVitorias >= 21 && resultadoDeVitorias <= 50) {
    rank = "Prata"
  } else if (resultadoDeVitorias >= 51 && resultadoDeVitorias <= 80) {
    rank = "Ouro"
  } else if (resultadoDeVitorias >= 81 && resultadoDeVitorias <= 90) {
    rank = "Diamante"
  } else if (resultadoDeVitorias >= 91 && resultadoDeVitorias <= 100) {
    rank = "Lendário"
  } else {
    rank = "Imortal"
  }
  return rank
}

function exibeMensagem(){
  prompt(`O herói tem saldo de ${resultadoDeVitorias} vitórias e está no nível ${rank}. Aperte Enter para calcular novamente.`)
}

function exibeMensagemFinal (){
  prompt(`O herói tem saldo de ${resultadoDeVitorias} vitórias e está no nível ${rank}.`)
}

function main(){
  perguntaVitorias()
  perguntaDerrotas()
  calculoDeVitorias(vitorias, derrotas)
  calculoDeRank(resultadoDeVitorias)
}