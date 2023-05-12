
function show(){

  // retorna o ELEMENTO que tem o id informado
  // HTMLElement
  const listaContato = document.getElementById('contact-list')
  console.log (listaContato)

  // Seleciona todas as TAGS conforme a tag informada
  // HTMLColleciton
  const liElemento = document.getElementsByTagName('li')
  console.log(liElemento)

  // Seleciona todos os elementos que tiverem a classe informada
  // HTMLColleciton
  const contactInput = document.getElementsByClassName('contact-input')
  console.log(contactInput)

  // Seleciona todos os elementos que tiverem o atributo name informado
  // NodeList
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  // retorna TODOS os elementos que vierem do SELETOR
  // NodeList
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)

  // retorna o PRIMEIRO elemento que vir do SELETOR
  // Element
  const contact = document.querySelector('#contact-list > li > label')
  console.log(contact)
}