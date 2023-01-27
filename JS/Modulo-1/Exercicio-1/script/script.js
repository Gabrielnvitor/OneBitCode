let nome = window.prompt("Digite seu primeiro nome:");
let sobreNome = window.prompt("Digite seu sobrenome:");
let campoEstudo = window.prompt("Informe o que você estuda:");
let anoNascimento = window.prompt("Informe o ano do seu nascimento:");

let idade = new Date().getFullYear() - parseInt(anoNascimento);

console.log(nome + " " + sobreNome);
console.log(campoEstudo);
console.log(idade);
