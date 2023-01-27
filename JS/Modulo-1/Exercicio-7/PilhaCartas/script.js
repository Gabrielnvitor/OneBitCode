
const digitoCarta = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"]
const naipeCarta = ["ouro","espada","copas","paus"]

let pilhaCartas = [];
let opcao = 0

do{
  opcao = prompt(
    listaPilhaCartas(pilhaCartas) + "\n\n" +
    "Digite uma opção:\n" +
    "1) Tirar uma carta\n" +
    "2) Descartar uma carta\n" +
    "3) Sair do jogo"
  )

  switch (opcao){
    case 1:
      pilhaCartas.push(tirarCarta());
      break;
    case 2:
      pilhaCartas = descartarUltimaCarta(pilhaCartas);
      break;
  }

} while (opcao !== "3")

function listaPilhaCartas(arr){
  let lista = ""
  console.log(arr.lenght)
  if(arr.lenght>0){
    lista = "Você tem:\n"
    for (let index = 0; index < arr.lenght; index ++){
      lista += index + "° - " + arr[index] + "\n"; 
    }
  }else{
    lista = "Mão vazia!"
  }
  return lista;
}

function descartarUltimaCarta(arr){
  arr.pop()
  return arr;
}

function tirarCarta(){
  let novaCarta = digitoCarta[Math.floor(Math.random()*digitoCarta.length)];
  novaCarta += " " + naipeCarta[Math.floor(Math.random()*naipeCarta.length)];
  return novaCarta;
}