
const towns = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba","Florianópolis"]
const str = towns[0]

console.log(...towns)
console.log(...str)

//Apontando dois arrays para um mesmo local
const townsCopy = towns
// Clonando um array da forma correta
const townsClone = [...towns]

townsCopy.pop()
townsCopy.pop()
townsCopy.push("São Bernardo do Campo")
townsClone.push("São Bernardo do Campo")

console.log(towns)
console.log(townsCopy)
console.log(townsClone)

//OPERADOR SPREAD COM OBJETO

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }
townsObjClone.test = "Teste"
console.log(townsObjClone)