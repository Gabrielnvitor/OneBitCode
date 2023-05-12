function newLabel(nome,forName,text){
  const newLabel = document.createElement('label')
  newLabel.name = nome
  newLabel.for = forName
  newLabel.innerText = text
  return newLabel
}

function newInput(id,value='',name,type = 'text',placeHolder = ''){
  const newInput = document.createElement('input')
  newInput.id = id
  newInput.name = name
  newInput.value = value
  newInput.type = type
  newInput.placeHolder = placeHolder
  return newInput
}

const arrayDevs = []
const form = document.getElementById('register-form')
let countRow = 0

function newField(ev){
  ev.preventDefault()
  // console.log(ev)

  const form = ev.currentTarget.parentNode
  const techList = form.children.tecList
  countRow += 1
  
  const newRow = document.createElement('li')
  newRow.id = "tech-" + countRow
  newRow.className = "inputRow"
  
  const buttonRemoveTecnology = document.createElement('button')
  buttonRemoveTecnology.innerText = "x"
  buttonRemoveTecnology.addEventListener('click',() =>{
    techList.removeChild(newRow)
  })

  const labelTecnology = newLabel('newTechLabel','techNameInput','Nome da Tecnologia: ')
  const techNameInput = newInput('techNameInput','','techNameInput','input')

  const expLabel = newLabel('label-exp','','Experiência: ')
  const id1 = 'expRadio-' + countRow + '.1'
  const radio1 = newInput(id1,'0-2 anos','expRadio-' + countRow,'radio')
  const label1 = newLabel('labelRadio1',id1,'0-2 anos')
  
  const id2 = 'expRadio-' + countRow + '.2'
  const radio2 = newInput(id2,'3-4 anos','expRadio-' + countRow,'radio')
  const label2 = newLabel('labelRadio1',id2,'3-4 anos')
  
  const id3 = 'expRadio-' + countRow + '.3'
  const radio3 = newInput(id3,'+5 anos','expRadio-' + countRow,'radio')
  const label3 = newLabel('labelRadio1',id3,'+5 anos')


  newRow.append(buttonRemoveTecnology,labelTecnology,techNameInput,expLabel,radio1,label1,radio2,label2,radio3,label3)

  techList.appendChild(newRow)

}


function saveDev(ev){
  ev.preventDefault()

  const fullName = document.getElementById('fullName')
  const inputRows = document.querySelectorAll('.inputRow')

  let tecnologies = []
  inputRows.forEach( function(row) {
    const techName = document.querySelector('#' + row.id + ' input[name="techNameInput"]').value
    const exp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

    tecnologies.push({techName:techName,exp:exp})
  })
  const newDev = {fullName:fullName.value,tecnologies}
  arrayDevs.push(newDev)

  fullName.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(arrayDevs)
}

document.getElementById('newTecBtn').addEventListener('click',newField)
document.getElementById('save').addEventListener('click',saveDev)