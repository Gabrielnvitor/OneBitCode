
alert("Bem vindo ao programa de manipular dinheiro!")

let saldoNaConta = parseFloat(prompt("Entre com o valor que tem na conta:"))

do {
  let menuSelecionado = prompt(
    "Você possui: R$" + saldoNaConta + "\n" +
    "Você deseja:\n" +
    "1) Adicionar dinheiro\n" +
    "2) Retirar dinheiro\n" + 
    "3) Sair"
    );
  switch (menuSelecionado){
    case "1" :
      saldoNaConta += parseFloat(prompt("Qual o valor deseja somar na conta: "))
      break
    case "2" :
      saldoNaConta -= parseFloat(prompt("Qual o valor deseja retirar da conta: "))
      break
    default:
      alert("Opção inválida.")
  }
} while (menuSelecionado != "3")

alert("Sistema encerrado.\nAté Logo")