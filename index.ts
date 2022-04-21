let parrafos = document.getElementsByClassName("ocultarp");

//let btnMenos = document.getElementsByClassName("ocultar");
let btnMas = document.getElementsByClassName("mas");
console.log(parrafos);
console.log(btnMas);
//console.log(btnMenos);
for (let i: number = 0; i < btnMas.length; i++) {
  btnMas[i].addEventListener("click", function () {
    parrafos[i].classList.toggle("ocultarp");
    btnMas[i].classList.toggle("ocultar");
  });
}
