
function newContact(){
  const constactList = document.getElementById('list-contacts')
  
  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const newUl = document.createElement('ul')


  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.append(nameInput)
  newUl.appendChild(nameLi)
  newUl.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'phone'
  phoneInput.name = 'phonenumber'
  phoneLi.appendChild(phoneInput)
  newUl.appendChild(phoneLi)
  newUl.appendChild(document.createElement('br'))

  const addressLi = document.createElement('li')
  addressLi.innerHTML = "<label for='address'>Endereço: </label>"
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = "address"
  addressLi.appendChild(addressInput)
  newUl.appendChild(addressLi)
  newUl.appendChild(document.createElement('br'))


  constactList.append(h3,newUl)

}

function removeContact(){
  const contactList = document.getElementById('list-contacts')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactList.removeChild(titles[titles.length - 1])
  contactList.removeChild(contacts[contacts.length - 1])
}