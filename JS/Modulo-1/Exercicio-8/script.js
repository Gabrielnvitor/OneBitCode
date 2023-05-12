let listaDeImoveis = []
let opcao = 0

do{
   opcao = prompt(
    "Bem-vindo a Imobiliária Web v1.0!!\n" +
    "Imóveis cadastrados: " + listaDeImoveis.length + "\n\n" +
    "Escolha uma opção:\n" +
    "1. Cadastrar novo imóvel\n" +
    "2. Consultar Imóveis cadastrados\n" +
    "3. Sair"
    )

    switch (opcao){
      case "1":
        let imovel = {}
        imovel.descricao = prompt("Descritivo do Imóvel:").toUpperCase()
        imovel.proprietario = prompt("Nome do proprietário:")
        imovel.quartos = prompt("Quantidade de quartos:")
        imovel.banheiros = prompt("Quantidade de banheiros:")
        imovel.garagem = prompt("Possui garagem? (Sim/Não):")

        const confirmacao = confirm(
          "Deseja cadastrar o imóvel:" +
          "\n\n" + imovel.descricao +
          "\n- Proprietário: " + imovel.proprietario + 
          "\n- Quartos: " + imovel.quartos + 
          "\n- Banheiros: " + imovel.banheiros + 
          "\n- Garagem: " + imovel.garagem
        )
        if (confirmacao){
          listaDeImoveis.push(imovel) 
          alert("Imóvel cadastrado com sucesso")
        }
        break
      case "2":
        let descritivoImoveis = ""
        for(let i=0; i < listaDeImoveis.length; i++){
          descritivoImoveis += "- Descrição: " + listaDeImoveis[i].descricao
          descritivoImoveis += "\n- Proprietário: " + listaDeImoveis[i].proprietario
          descritivoImoveis += "\n- Quartos: " + listaDeImoveis[i].quartos
          descritivoImoveis += "\n- Banheiros: " + listaDeImoveis[i].banheiros
          descritivoImoveis += "\n- Garagem: " + listaDeImoveis[i].garagem
          descritivoImoveis += "\n\n"
        }
        alert(descritivoImoveis)
        break
      case "3":
          alert("Sistema encerrado!")
          break
      default:
        alert("Opção inválida!")
    }
  
}while (opcao !== "3")