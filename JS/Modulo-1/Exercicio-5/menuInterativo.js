
alert("Bem vindo ao menu interativo!")

let menuSelecionado = prompt("Selecione um dos menus disponíveis:\n" +
                              "1) Item 1\n" + 
                              "2) Item 2\n" + 
                              "3) Item 3\n" + 
                              "4) Item 4\n" + 
                              "5) Encerrar\n")

do{
  menuSelecionado = prompt(
    "Selecione um dos menus disponíveis:\n" +
    "1) Item 1\n" + 
    "2) Item 2\n" + 
    "3) Item 3\n" + 
    "4) Item 4\n" + 
    "5) Encerrar\n");

  switch (menuSelecionado){
    case 1:
      alert("O menu escolhido foi " + menuSelecionado + "!")
    case 2:
      alert("O menu escolhido foi " + menuSelecionado + "!")
    case 3:
      alert("O menu escolhido foi " + menuSelecionado + "!")
    case 4:
      alert("O menu escolhido foi " + menuSelecionado + "!")
    case 5:
      alert("O menu escolhido Encerrar!")
    default :
      alert("Opção inválida!")
  }
} while (menuSelecionado != "5")

alert("O menu foi encerrado.\nAté logo!")