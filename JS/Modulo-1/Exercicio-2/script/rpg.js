const character1 = prompt("Qual o nome do primeiro lutador?");
const attackSkill = parseInt(
  prompt("Quantos pontos de ataque possui " + character1 + "?")
);

const character2 = prompt("Qual o nome do segundo lutador?");
let lifeSkill = parseInt(
  prompt("Quantos pontos de vida tem " + character2 + "?")
);
const defenseSkill = parseInt(
  prompt("Quantos pontos de defesa possui " + character2 + "?")
);
const shild = confirm("O personagem " + character2 + " possui escudo?");

alert(
  "O personagem " +
    character1 +
    " acaba de atacar o personagem " +
    character2 +
    "!!!!"
);

let damage = 0;
if (attackSkill > defenseSkill) {
  damage = shild
    ? (attackSkill - defenseSkill) / 2
    : attackSkill - defenseSkill;
  lifeSkill -= damage;
  lifeSkill = lifeSkill < 0 ? 0 : lifeSkill;
}
alert(
  character1 + " causou " + damage + " de dano ao defensor " + character2 + "!"
);

alert(
  "Atacante: " +
    character1 +
    "\nPontos de ataque: " +
    attackSkill +
    "\n\n" +
    "Defensor: " +
    character2 +
    "\nPontos de defesa: " +
    defenseSkill +
    "\nEscudo: " +
    shild +
    "\nPontos de vida: " +
    lifeSkill
);
