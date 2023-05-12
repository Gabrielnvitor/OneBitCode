const boardRegion = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function uptadeTitle(){
  const playerInput = document.getElementById(turnPlayer).value
  document.getElementById('turnPlayer').innerText = playerInput
}

function initializeGame(){
  vBoard = [['','',''],['','',''],['','','']]
  turnPlayer = 'player1'
  document.querySelector('h2').innerHTML = "<h2>Vez de: <span id='turnPlayer'></span></h2>"
  uptadeTitle()
  boardRegion.forEach(function(element){
    element.classList.remove('win')
    element.innerText = ''
    element.classList.add('cursor-pointer')
    element.addEventListener('click',handleBoardClick)
  })
}
function disableRegion(element){
  element.classList.remove('cursor-pointer')
  element.removeEventListener('click',handleBoardClick)
}

function getWinRegions(){
  const winRegion = []
  if(vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2]){
    winRegion.push('0.0','0.1','0.2')
  }else if(vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]){
    winRegion.push('1.0','1.1','1.2')
  }else if(vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2]){
    winRegion.push('2.0','2.1','2.2')
  }else if(vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0]){
    winRegion.push('0.0','1.0','2.0')
  }else if(vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1]){
    winRegion.push('0.1','1.1','2.1')
  }else if(vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2]){
    winRegion.push('0.2','1.2','2.2')
  }else if(vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2]){
    winRegion.push('0.0','1.1','2.2')
  }else if(vBoard[2][0] && vBoard[2][0] === vBoard[1][1] && vBoard[2][0] === vBoard[0][2]){
    winRegion.push('2.0','1.1','0.2')
  }
  return winRegion
}

function handleWin(regions){
  regions.forEach(function(region){
    document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const playerName = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerText = playerName + " é o vencedor!"
  boardRegion.forEach(function(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click',handleBoardClick)
  })
}

function handleBoardClick(ev){
  let span = ev.currentTarget
  let region = ev.currentTarget.dataset.region
  let rowColumnPair = region.split('.')
  let row = rowColumnPair[0]
  let column = rowColumnPair[1]
  if(turnPlayer === 'player1'){
    span.innerText = "X"
    vBoard[row][column] = "X"
  }else{
    span.innerText = "O"
    vBoard[row][column] = "O"
  }
  console.clear()
  console.table(vBoard)
  disableRegion(span)
  const winRegions = getWinRegions()
  if (winRegions.length > 0){
    handleWin(winRegions)
  }else if(vBoard.flat().includes('')){
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
    uptadeTitle()
  }else{
    document.querySelector('h2').innerHTML = "Empate!"
  }
}

document.getElementById('play').addEventListener('click',initializeGame)