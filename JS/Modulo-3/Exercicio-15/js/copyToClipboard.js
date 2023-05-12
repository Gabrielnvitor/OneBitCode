export default function(ev){
  const button = ev.currentTarget
  if (button.innerText == 'Copy'){
    button.innerText = 'Copied!'
    navigator.clipboard.writeText(document.getElementById('result').value)
    button.classList.add('success')
  }else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}