import calculate from "./calculate.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

export function handleButtonPress(ev){
  input.value += ev.currentTarget.dataset.value
}

export function handleKeyDown(ev){
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)){
    input.value += ev.key
  }
  if (ev.key === 'Backspace'){
    input.value = input.value.slice(0,-1)
  }
  if (ev.key === 'Enter'){
    calculate()
  }
}

export function handleBtnClear(){
  input.value = ''
  resultInput.value = ''
  resultInput.classList.remove('error')
  document.getElementById('copyToClipboard').innerText = 'Copy'
  document.getElementById('copyToClipboard').classList.remove('success')
  input.focus()
}