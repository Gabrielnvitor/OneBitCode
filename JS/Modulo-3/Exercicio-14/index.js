


const average = (...numbers) => {
  const sum = numbers.reduce((current,num) => current+num,0)
  return sum/numbers.length
}

console.log(`A Média Aritmética Simples é: ${average(1,2,3,4,5,6,7,8,9)}`)

const weightedAverage =  (...entries) => {
  const sum = entries.reduce((current,{number,weight}) => current + (number * (weight ?? 1)),0) 
  const weightSum = entries.reduce((current,entry) => current + (entry.weight ?? 1),0)
  return sum/weightSum
}

console.log(`A Média Aritmética Ponderada é: ${weightedAverage(
  { number: 9, weight: 3 },
  { number: 7},
  { number: 10},
)}`)



const median = (...numbers) => {
  const orderedNumbers = numbers.sort((a,b) => a - b)
  const midian = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0){
    return orderedNumbers[midian]
  }
  const firstMidian = orderedNumbers[midian-1]
  const secondMidian = orderedNumbers[midian]
  return average(firstMidian,secondMidian)
}

console.log(`A Mediana é: ${median(17,13,9,7,5,1,3,11)}`)
console.log(`A Mediana é: ${median(1,1,1,3,5,6,8,9,9,9)}`)


const mode = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a,b) => b[1] - a[1])
  const orderedNumbers = quantities.map(element => element[0])
  return orderedNumbers[0]
}


console.log(`Moda: ${mode(1,2,2,3,3,3)}`)