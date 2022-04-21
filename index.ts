let parrafos = document.getElementsByClassName("ocultar");

let btnMas = document.getElementsByClassName("aparece");
console.log(parrafos);
console.log(btnMas);

for (let i: number = 0; i < btnMas.length; i++) {
  btnMas[i].addEventListener("click", function () {
    parrafos[i].classList.remove("ocultar");
    btnMas[i].classList.toggle("ocultar");
  });
}
