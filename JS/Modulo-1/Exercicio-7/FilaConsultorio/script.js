alert("Bem vindo ao consultório JS!");
let listaEspera = [];
let  opcao = 0;
do {
  
   opcao = prompt(
    imprimeLista(listaEspera) + 
    "Selecione uma opção:\n" +
    "1 - Novo paciente\n" +
    "2 - Atender paciente\n" +
    "3 - Sair"
    )
    switch (opcao){
      case "1":
        let novopaciente = prompt("Digite o nome do novo paciente")
        listaEspera.push(novopaciente);
        imprimeLista(listaEspera)
        break;
      case "2":
        let pacienteConsultado = listaEspera.shift()
        if(pacienteConsultado){
          alert("O paciente " + pacienteConsultado + " foi atendido")
        }else{
          alert("Não existem pacientes esperando atendimento.")
        }
        break;
      case "3":
        alert("encerrando sistema...");
        break;
      default:
        alert("Opção inválida.")
    }
} while (opcao !== "3")

alert("sistema encerrado!");


function imprimeLista(arr){
  if(arr.length > 0){
    let lista = "Lista de pacientes: ";
    for (let index = 0; index < arr.length; index ++){
      lista += "\n" + (index + 1) + "° - " + arr[index];
    }
    lista += "\n\n"
    return lista;
  }else {
    return "Lista vazia!\n\n";
  }
}

  