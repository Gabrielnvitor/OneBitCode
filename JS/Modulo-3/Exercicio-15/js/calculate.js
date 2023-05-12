const resultInput = document.getElementById('result')

export default function(){
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}