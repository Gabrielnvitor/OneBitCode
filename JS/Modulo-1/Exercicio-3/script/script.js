const medidaEmMetros = parseFloat(prompt("Insira uma medida em metros:"));
const converterPara = prompt(
  "Para qual medida você deseja converter: (mm,cm,pol,dm,dam,hm,km,mi)"
);

switch (converterPara) {
  case "mm":
    alert(
      "Resultado: " + medidaEmMetros + "m = " + medidaEmMetros * 1000 + "mm"
    );
    break;
  case "cm":
    alert(
      "Resultado: " + medidaEmMetros + "m = " + medidaEmMetros * 100 + "cm"
    );
    break;
  case "pol":
    alert("Resultado: " + medidaEmMetros + "m = " + medidaEmMetros * 39.3700787 + "pol");
    break;
  case "dm":
    alert("Resultado: " + medidaEmMetros + "m = " + medidaEmMetros * 10 + "dm");
    break;
  case "dam":
    alert("Resultado: " + medidaEmMetros + "m = " + medidaEmMetros / 10 + "dem");
    break;
  case "hm":
    alert(
      "Resultado: " + medidaEmMetros + "m = " + medidaEmMetros / 100 + "hm"
    );
    break;
  case "km":
    alert(
      "Resultado: " + medidaEmMetros + "m = " + medidaEmMetros / 1000 + "km"
    );
    break;
  case "mi":
    alert(
      "Resultado: " + medidaEmMetros + "m = " + medidaEmMetros / 1609.344 + "mi"
    );
    break;
}
