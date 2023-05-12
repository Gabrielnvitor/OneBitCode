const vagas = []

function exibirMenu(){
  const opcao = prompt(
    "Selecione a opção desejada:\n" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um candidato em uma vaga" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )
  return opcao
}

function executar(){
  let opcao = ""
  
  do{
    opcao = exibirMenu()

    switch (opcao){
      case "1":
        listarVagas()
        break
      case "2":
        criarVaga()
        break
      case "3":
        visualizarVaga()
        break
      case "4":
        novoCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Encerrando sistema...")
      default:
        alert("Opcao inválida!")
    }

  }while (opcao !== "6")
}

function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textoFinal,vaga,indice){
    textoFinal += (indice + 1) + ". "
    textoFinal += vaga.nomeVaga
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  },"")
  if (vagasEmTexto === ""){
    vagasEmTexto = "Não há vagas cadastradas."
  }
  alert(vagasEmTexto)
}

function criarVaga(){
  const novaVaga = {}
  novaVaga.nomeVaga = prompt("Informe um nome para a vaga:")
  novaVaga.descricaoVaga = prompt("Informe uma descrição para a vaga:")
  novaVaga.dataLimite = prompt("Informe a data limite para inscrições: (dd/mm/aaaa)")
  novaVaga.candidatos = []
  const confirmacao = confirm(
    "Deseja cadastrar uma vaga com estas informações?\n\n" +
    "Vaga: " + novaVaga.nomeVaga + "\n" +
    "Descrição: " + novaVaga.descricaoVaga + "\n" +
    "Data limite: " + novaVaga.dataLimite + "\n"
  )
  if(confirmacao){
    vagas.push(novaVaga)
  }
}

function visualizarVaga(){
  let indiceVaga = buscarIndice()
  const vaga = vagas[indiceVaga]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal,candidato){
    return textoFinal + "\n- " + candidato
  },"")

  alert(
    "Nº " + (indiceVaga + 1) + "\n" +
    "Nome: " + vaga.nomeVaga + "\n" +
    "Descrição: " + vaga.descricaoVaga + "\n" +
    "Data limite: " + vaga.dataLimite + "\n" +
    "Candidatos: " + candidatosEmTexto
  )
}

function novoCandidato(){
  let nomeCandidato = prompt("Insira o nome do candidato:")
  let indiceVaga = buscarIndice()
  let vaga = vagas[indiceVaga]
  let confirmacao = confirm(
    "Deseja realmente cadastrar o candidato " + nomeCandidato + " na vaga:\n" +
    "- " + vaga.nomeVaga + "\n" +
    "- " + vaga.descricaoVaga
    )
  if (confirmacao){
      vaga.candidatos.push(nomeCandidato)
  }
}

function excluirVaga(){
  let indiceVaga = buscarIndice()
  let confirmacao = confirm(
    "Vaga: " + vagas[indiceVaga].nomeVaga + "\n" +
    "Descrição: " + vagas[indiceVaga].descricaoVaga + "\n" +
    "Data limite: " + vagas[indiceVaga].dataLimite + "\n\n" +
    "Você deseja realmente excluir a vaga?"
  )
  if(confirmacao){
    vagas.splice(indiceVaga,1)
  }
}

function buscarIndice(){
  let indiceVaga = -1
  do{
    indiceVaga = parseInt(prompt("Qual o índice da vaga?"))
    if (indiceVaga < 0 && indiceVaga > vagas.length){
      alert("Indice da vaga inválido.")
    }
  } while (indiceVaga < 0 || indiceVaga > vagas.length)
  return indiceVaga -= 1
}

executar()