function showForm(){
  const form = document.getElementById('form')
  form.innerHTML = ''

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome do jogador: "
  const nameInput = document.createElement('input')
  nameInput.name = "player-name"
  nameInput.type = 'text'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))
  
  const positionLi = document.createElement('li')
  positionLi.innerText = "Posição: "
  const positionInput = document.createElement('input')
  positionInput.name = "player-position"
  positionInput.type = 'text'
  positionLi.appendChild(positionInput)
  ul.appendChild(positionLi)
  ul.appendChild(document.createElement('br'))
  
  const number = document.createElement('li')
  number.innerText = "Número da camisa: "
  const numberInput = document.createElement('input')
  numberInput.name = "player-number"
  numberInput.type = 'number'
  number.appendChild(numberInput)
  ul.appendChild(number)
  ul.appendChild(document.createElement('br'))

  form.appendChild(ul)

  const escalar = document.createElement('button')
  escalar.innerText = "Escalar"
  escalar.onclick = newPlayer
  form.appendChild(escalar)

}

function newPlayer(){
  let novoJogador = {}
  novoJogador.nome = document.getElementsByName('player-name')[0].value
  novoJogador.numero = document.getElementsByName('player-number')[0].value
  novoJogador.posicao = document.getElementsByName('player-position')[0].value
  let confirmacao = confirm(
    "Você confirma a escalação para o jogador a baixo?" + 
    "\n Nome: " + novoJogador.nome +
    "\n Número: " + novoJogador.numero +
    "\n Posição: " + novoJogador.posicao
  )

  if (confirmacao) {
    const playersList = document.getElementById('players-list')
    const newPlayer = document.createElement('li')
    newPlayer.id = "player-" + novoJogador.numero
    newPlayer.innerText = novoJogador.posicao + ": " + novoJogador.nome + "(" + novoJogador.numero + ")"
    playersList.appendChild(newPlayer)
    document.getElementsByName('player-name')[0].value = ""
    document.getElementsByName('player-number')[0].value = ""
    document.getElementsByName('player-position')[0].value = ""
  }
}


function removePlayer(){
  let numeroSelecionado = 0
  do{
    numeroSelecionado = prompt('Insira um número para remover da lista:')
    if(!document.getElementById('player-'+ numeroSelecionado)){
      alert("Jogador nº " + numeroSelecionado + " não localizado!")
    }
  }while (!document.getElementById('player-'+ numeroSelecionado))

  let playerSelected = document.getElementById('player-'+ numeroSelecionado).innerText
  let confirmacao = confirm(
    "Você deseja realmente excluir o jogador a baix? " + 
    "\n" + playerSelected
  )

  if (confirmacao) {
    document.getElementById('player-'+ numeroSelecionado).remove()

  }
}