let number1 = prompt("Digite o primeiro valor:");
let number2 = prompt("Digite o segundo valor:");

let resultadoSoma = parseFloat(number1) + parseFloat(number2);
let resultadoSubtracao = parseFloat(number1) - parseFloat(number2);
let resultadoMultiplicacao = parseFloat(number1) * parseFloat(number2);
let resultadoDivisao = parseFloat(number1) / parseFloat(number2);

console.log(number1 + "+" + number2 + "=" + resultadoSoma);
console.log(number1 + "-" + number2 + "=" + resultadoSubtracao);
console.log(number1 + "*" + number2 + "=" + resultadoMultiplicacao);
console.log(number1 + "/" + number2 + "=" + resultadoDivisao);
