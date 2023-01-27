
const palavra = prompt("Digite uma palavra:").toLowerCase()

let palavraInvertida = ""
for(i = palavra.length - 1; i >= 0 ; i--){
  palavraInvertida += palavra[i]
}

if(palavra !== palavraInvertida){
  alert("A palavra " + palavra + " não é um palíndromo")
  alert("As palavras " + palavra + " e " + palavraInvertida + " são diferentes.")
} else {
  alert("A palavra " + palavra + " é um palíndromo")
}