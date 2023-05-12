function sum(...numbers){
  return numbers.reduce((accum,num) => accum + num , 0)
}

function sub(param,...numbers){
  let resultado = numbers.reduce((accum,num)=> accum + num,0)
  return param - resultado
}

console.log(sum(1))
console.log(sum(1,1,1,1,1))
console.log(sum(1,2,3,4,4,56,34,4))
console.log(sub(1000,1,2,3,4,5,6))
