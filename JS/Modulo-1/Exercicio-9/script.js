executar()

function calculaAreaTrinagulo(){
  const base = parseFloat(prompt("Insira o valor da BASE:"))
  const altura = parseFloat(prompt("Insira o valor da ALTURA:"))
  return base * altura / 2
}

function calculaAreaRetangulo(){
  const base = parseFloat(prompt("Insira o valor da BASE:"))
  const altura = parseFloat(prompt("Insira o valor da ALTURA:"))
  return base * altura
}

function calculaAreaQuadrado(){
  const lado = parseFloat(prompt("Insira o valor do LADO:"))
  return lado * lado
}

function calculaAreaTrapezio(){
  const baseMaior = parseFloat(prompt("Insira o valor da base MAIOR:"))
  const baseMenor = parseFloat(prompt("Insira o valor da base MENOR:"))
  const altura = parseFloat(prompt("Insira o valor da ALTURA:"))
  return ((baseMaior + baseMenor)* altura) / 2
}

function calculaAreaCirculo(){
  const raio = parseFloat(prompt("Insira o valor do RAIO:"))
  const pi = 3.14
  return (pi * (Math.pow(raio,2)))
}


function exibirMenu(){
  return prompt(
    "Selecione qual operação deseja realizar:\n" +
    "\n1. Área do triângulo" +
    "\n2. Área do retângulo" +
    "\n3. Área do quadrado" +
    "\n4. Área do trapézio" +
    "\n5. Área do círculo" +
    "\n6. Sair da calculadora"
    )
}

function executar(){
  let opcao = ""
  do{
    opcao = exibirMenu()
    let resultado
    
    switch (opcao) {
      case "1":
        resultado = calculaAreaTrinagulo()
        break
      case "2":
        resultado = calculaAreaRetangulo()
        break
      case "3":
        resultado = calculaAreaQuadrado()
        break
      case "4":
        resultado = calculaAreaTrapezio()
        break
      case "5":
        resultado = calculaAreaCirculo()
        break
      case "6":
        alert("Encerrando Calculadora...")
        break
      default: 
        alert("Opção inválida")
    }
    if (resultado){
      alert(resultado)
    }
  } while (opcao !== "6")
}


// executar()



const personagens = [
  {nivel: "10", raca: "elfo", nome: "Legolas"},
  {nivel: "11", raca: "mago", nome: "Gandalf"},
  {nivel: "12", raca: "robit", nome: "Frodo"},
]

// console.log (personagens)

// let nomePersonagens = personagens.map(function(personagem){
//   return personagem.nome
// })

// console.log(nomePersonagens)