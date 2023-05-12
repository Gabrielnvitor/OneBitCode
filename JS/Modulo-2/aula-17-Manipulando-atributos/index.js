
const input = document.getElementById('input')
let desabilitado

document.getElementById('value').addEventListener('click', function() {
  input.value = 'Olá Mundo'
  // imprime o valor atual do componente
  console.log(input.value)
  // imprime o valor original do componente, o valor que está no index.html
  console.log(input.getAttribute('value'))
  // seta o valor no index.html
  input.setAttribute('value','Olá novo mundo')
  //imprime valor do index.html
  console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click',function(){
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click',function(){
  input.placeholder = 'Digite algum valor'
})

document.getElementById('disable').addEventListener('click',function(){
  desabilitado = input.disabled == true ? false : true
  input.setAttribute('disabled',desabilitado)
})

