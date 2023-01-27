let car1 = prompt("Carro nº 1:");
let velocity1 = prompt("Velocidade máxima do " + car1 + ":");
let car2 = prompt("Carro nº 2:");
let velocity2 = prompt("Velocidade máxima do " + car2 + ":");

if (velocity1 > velocity2) {
  alert("O " + car1 + " é mais rápido que o " + car2 + ".");
} else if (velocity1 === velocity2) {
  alert(car1 + " e " + car2 + " possuem a mesma velocidade");
} else {
  alert("O " + car2 + " é mais rápido que o " + car1 + ".");
}
