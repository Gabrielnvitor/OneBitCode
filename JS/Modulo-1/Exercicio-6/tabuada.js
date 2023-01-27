const numero = parseInt(prompt("Digite um número: "))
let tabuada = "A tabuada de " + numero + "é:\n"

for (let i = 1; i <= 20; i++){
  tabuada += "- " + (numero * i) + "\n"
}

alert(tabuada)
