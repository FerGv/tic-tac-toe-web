import preguntas from './questions.js';

const btnReiniciar = document.querySelector('#btnReiniciar');
const divPregunta = document.querySelector('#pregunta');
const form = document.querySelector('#form');
const spanTurno = document.querySelector('#turno');
const tdArray = document.querySelectorAll('td');
let respuestaCorrecta, tdClick;
let ganada = false;

function validarUno() {
  if (!tdArray[0].childNodes.length) return false;

  if (
    tdArray[1].childNodes.length &&
    tdArray[2].childNodes.length &&
    tdArray[0].childNodes[0].data == tdArray[1].childNodes[0].data &&
    tdArray[0].childNodes[0].data == tdArray[2].childNodes[0].data
  ) {
    cambiarFondo(tdArray[0], tdArray[1], tdArray[2]);
    return true;
  }

  if (
    tdArray[3].childNodes.length &&
    tdArray[6].childNodes.length &&
    tdArray[0].childNodes[0].data == tdArray[3].childNodes[0].data &&
    tdArray[0].childNodes[0].data == tdArray[6].childNodes[0].data
  ) {
    cambiarFondo(tdArray[0], tdArray[3], tdArray[6]);
    return true;
  }

  if (
    tdArray[4].childNodes.length &&
    tdArray[8].childNodes.length &&
    tdArray[0].childNodes[0].data == tdArray[4].childNodes[0].data &&
    tdArray[0].childNodes[0].data == tdArray[8].childNodes[0].data
  ) {
    cambiarFondo(tdArray[0], tdArray[4], tdArray[8]);
    return true;
  }
}

function validarCinco() {
  if (!tdArray[4].childNodes.length) return false;

  if (
    tdArray[1].childNodes.length &&
    tdArray[7].childNodes.length &&
    tdArray[4].childNodes[0].data == tdArray[1].childNodes[0].data &&
    tdArray[4].childNodes[0].data == tdArray[7].childNodes[0].data
  ) {
    cambiarFondo(tdArray[4], tdArray[1], tdArray[7]);
    return true;
  }

  if (
    tdArray[3].childNodes.length &&
    tdArray[5].childNodes.length &&
    tdArray[4].childNodes[0].data == tdArray[3].childNodes[0].data &&
    tdArray[4].childNodes[0].data == tdArray[5].childNodes[0].data
  ) {
    cambiarFondo(tdArray[4], tdArray[3], tdArray[5]);
    return true;
  }

  if (
    tdArray[6].childNodes.length &&
    tdArray[2].childNodes.length &&
    tdArray[6].childNodes[0].data == tdArray[4].childNodes[0].data &&
    tdArray[4].childNodes[0].data == tdArray[2].childNodes[0].data
  ) {
    cambiarFondo(tdArray[4], tdArray[6], tdArray[2]);
    return true;
  }
}

function validarNueve() {
  if (!tdArray[8].childNodes.length) return false;

  if (
    tdArray[5].childNodes.length &&
    tdArray[2].childNodes.length &&
    tdArray[8].childNodes[0].data == tdArray[5].childNodes[0].data &&
    tdArray[8].childNodes[0].data == tdArray[2].childNodes[0].data
  ) {
    cambiarFondo(tdArray[8], tdArray[5], tdArray[2]);
    return true;
  }

  if (
    tdArray[7].childNodes.length &&
    tdArray[6].childNodes.length &&
    tdArray[8].childNodes[0].data == tdArray[7].childNodes[0].data &&
    tdArray[8].childNodes[0].data == tdArray[6].childNodes[0].data
  ) {
    cambiarFondo(tdArray[8], tdArray[7], tdArray[6]);
    return true;
  }
}

function toggleSeleccionada(tdSeleccionada = null) {
  tdArray.forEach((td) => td.classList.remove('seleccionada'));

  if (tdSeleccionada) {
    tdSeleccionada.classList.add('seleccionada');
  }
}

function cambiarFondo(td1, td2, td3) {
  td1.classList.add('seleccionada');
  td2.classList.add('seleccionada');
  td3.classList.add('seleccionada');
}

tdArray.forEach((td) => {
  td.addEventListener('click', (e) => {
    if (ganada) return;

    toggleSeleccionada();
    divPregunta.innerHTML = '';

    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }

    if (e.target.childNodes.length) return;

    let numeroAleatorio = Math.floor(Math.random() * preguntas.length-1) + 1;
    let pregunta = preguntas[numeroAleatorio].pregunta;
    let respuestas = preguntas[numeroAleatorio].respuestas;
    let idCorrecta = preguntas[numeroAleatorio].correcta;
    respuestaCorrecta = preguntas[numeroAleatorio].respuestas[idCorrecta-1];
    tdClick = document.getElementById(e.target.id);
    toggleSeleccionada(tdClick);
    divPregunta.innerHTML = pregunta;

    respuestas.forEach((respuesta) => {
      let radio = document.createElement('input');
      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', 'respuestas');
      radio.setAttribute('id', `respuesta${respuesta.id}`);
      radio.setAttribute('value', respuesta.id);

      let label = document.createElement('label');
      label.setAttribute('for', `respuesta${respuesta.id}`);
      label.setAttribute('class', 'label');
      let texto = document.createTextNode(respuesta.respuesta);
      label.appendChild(texto);
      let br = document.createElement('br');

      form.appendChild(radio);
      form.appendChild(label);
      form.appendChild(br);
    });

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Checar');
    submit.setAttribute('class', 'btn');
    form.appendChild(submit);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let radios = e.target.respuestas;
  let cambiaTurno = false;

  radios.forEach((radio) => {
    if (!radio.checked) return;

    if (radio.value != respuestaCorrecta.id) {
      alert(`Error. La correcta era ${respuestaCorrecta.respuesta}`);
    } else {
      let equisCirculo = turno ? 'X' : 'O';
      let texto = document.createTextNode(equisCirculo);
      tdClick.appendChild(texto);

      if (validarUno() || validarCinco() || validarNueve()) {
        alert(`Gana ${equisCirculo}`);
        ganada = true;
        sessionStorage.setItem('turno', turno);
      }
    }

    if (!ganada) {
      tdClick.classList.remove('seleccionada');
    }

    cambiaTurno = true;
  });

  if (!cambiaTurno) {
    alert('Escoge una opción');
  } else {
    turno = !turno;
    spanTurno.innerHTML = turno ? 'X' : 'O';
    tdSeleccionada = null;
    divPregunta.innerHTML = '';

    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
  }
});

window.addEventListener('load', () => {
  window.turno = sessionStorage.getItem('turno');

  if (!turno) {
    sessionStorage.setItem('turno', true);
  } else {
    sessionStorage.setItem('turno', turno);
  }

  turno = sessionStorage.getItem('turno');
  spanTurno.innerHTML = turno === 'true' ? 'X' : 'O';
});

btnReiniciar.addEventListener('click', () => {
  location.reload();
});
