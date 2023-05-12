
const person = {
  name:"Gabriel",
  job:"Dev",
  phone:"11994381311",
  parents:["monica","lorena"]
}

console.log(person)

const {name,job,phone,parents} = person

console.log(name)
console.log(job)
console.log(phone)
console.log(parents)

const [mae, irma] = parents

console.log(mae)
console.log(irma)

function createUser({name,job,phone,parents}){
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    phone,
    parents
  }
}

const candidato = createUser(person)

console.log(candidato)