
function lightTeme(){
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function darkTeme(){
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

function switchTeme(){
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', lightTeme)
document.getElementById('darkBtn').addEventListener('click', darkTeme)
document.getElementById('switchBtn').addEventListener('click', switchTeme)