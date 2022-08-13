const input = document.querySelector(".adivinharInput");
const resposta = document.querySelector(".resposta");
const button = (document.querySelector(".adivinharBtn").onclick = verifica);
const numeros = document.querySelector(".numerosSorteados");

const numeroAleatorio = () => Math.round(Math.random() * 10);

function sorteiaNumeros(quantidade) {
  let segredos = [];

  for (let numero = 1; numero <= quantidade; ) {
    let numeroSorteado = numeroAleatorio();

    if (numeroAleatorio != 0) {
      let numeroRepetido = false;

      for (let posicao = 0; posicao < segredos.length; posicao++) {
        if (segredos[posicao] == numeroSorteado) {
          numeroRepetido = true;
          break;
        }
      }
      if (!numeroRepetido && numeroSorteado != 0) {
        segredos.push(numeroSorteado);
        numero++;
      }
    }
  }

  return segredos;
}

let segredos;

input.focus();

function limpar() {
  resposta.textContent = "Resposta: ";
  resposta.classList.remove("text-success");
  resposta.classList.remove("text-danger");
  numeros.textContent = "Números sorteados: ";
}

function exibir(acerto) {
  if (acerto == true) {
    resposta.textContent = "Resposta: você acertou!";
    resposta.classList.add("text-success");
  } else {
    resposta.textContent = "Resposta: você errou!";
    resposta.classList.add("text-danger");
  }

  numeros.textContent = "Números sorteados: " + segredos.join(", ");

  setTimeout(() => {
    limpar();
  }, 1000);
}

function verifica() {
  segredos = sorteiaNumeros(5);

  let achou = false;

  for (let posicao = 0; posicao < segredos.length; posicao++) {
    if (input.value == segredos[posicao]) {
      achou = true;
      exibir(true);
      break;
    }
  }

  if (!achou) {
    exibir(false);
  }

  input.value = "";
  input.focus();
}
