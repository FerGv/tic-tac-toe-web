let respuestaCorrecta, tdClick;
let ganada = false;
let btnReiniciar = document.getElementById('btnReiniciar');
let divPregunta = document.getElementById('pregunta');
let form = document.getElementById('form');
let spanTurno = document.getElementById('turno');
let tdArray = document.getElementsByTagName('td');
let preguntas = [
    {
        "pregunta": "¿Qué es el proceso de decisión de compra?",
        "respuestas": [
            {"id": 1, "respuesta": "Serie de etapas para la elección de un producto"},
            {"id": 2, "respuesta": "Serie de etapas para diseñar una estrategia de marketing"},
            {"id": 3, "respuesta": "Serie de etapas para vender un producto"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Cuántas son las etapas del proceso de decisión de compra?",
        "respuestas": [
            {"id": 1, "respuesta": "2"},
            {"id": 2, "respuesta": "8"},
            {"id": 3, "respuesta": "5"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Cuáles son las etapas del proceso de decisión de compra?",
        "respuestas": [
            {"id": 1, "respuesta": "Reconocimiento, venta, evaluación, análisis, poscompra"},
            {"id": 2, "respuesta": "Reconocimiento, evaluación, compra, precompra"},
            {"id": 3, "respuesta": "Reconocimiento, investigación, evaluación, compra, poscompra"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿Qué preguntas responde el proceso de decisión de compra?",
        "respuestas": [
            {"id": 1, "respuesta": "qué vender, cuánto vender, dónde vender, cuándo y cómo vender"},
            {"id": 2, "respuesta": "qué comprar, cuánto comprar, dónde comprar, cuándo y cómo comprar"},
            {"id": 3, "respuesta": "qué comprar, cuánto vender, dónde comprar, cuándo y cómo vender"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿De qué trata la etapa de RECONOCER UNA NECESIDAD (AWARENESS)?",
        "respuestas": [
            {"id": 1, "respuesta": "obtener información de fuentes personales, comerciales, públicas y empíricas"},
            {"id": 2, "respuesta": "consideración y evaluación de opciones con base en ciertos criterios"},
            {"id": 3, "respuesta": "donde la persona reconoce un problema o una necesidad de determinado producto o servicio"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "¿De qué trata la etapa de INVESTIGACIÓN?",
        "respuestas": [
            {"id": 1, "respuesta": "consideración y evaluación de opciones con base en ciertos criterios"},
            {"id": 2, "respuesta": "obtener información de fuentes personales, comerciales, públicas y empíricas"},
            {"id": 3, "respuesta": "el consumidor considera que tiene suficiente información, toma una decisión y decide comprar"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿De qué trata la etapa de EVALUACIÓN DE ALTERNATIVAS?",
        "respuestas": [
            {"id": 1, "respuesta": "consideración y evaluación de opciones con base en ciertos criterios"},
            {"id": 2, "respuesta": "donde la persona reconoce un problema o una necesidad de determinado producto o servicio"},
            {"id": 3, "respuesta": "en esta etapa operan sentimientos de satisfacción o insatisfacción"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿De qué trata la etapa de COMPRA?",
        "respuestas": [
            {"id": 1, "respuesta": "obtener información de fuentes personales, comerciales, públicas y empíricas"},
            {"id": 2, "respuesta": "el consumidor considera que tiene suficiente información, toma una decisión y decide comprar"},
            {"id": 3, "respuesta": "donde la persona reconoce un problema o una necesidad de determinado producto o servicio"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "¿De qué trata la etapa de POSCOMPRA?",
        "respuestas": [
            {"id": 1, "respuesta": "donde la persona reconoce un problema o una necesidad de determinado producto o servicio"},
            {"id": 2, "respuesta": "consideración y evaluación de opciones con base en ciertos criterios"},
            {"id": 3, "respuesta": "en esta etapa operan sentimientos de satisfacción o insatisfacción"}
        ],
        "correcta": 3
    }
];


// FUNCIONES

function validarUno() {
    if (tdArray[0].childNodes.length) {
        if (tdArray[1].childNodes.length && tdArray[2].childNodes.length && tdArray[0].childNodes[0].data == tdArray[1].childNodes[0].data && tdArray[0].childNodes[0].data == tdArray[2].childNodes[0].data) {
            cambiarFondo(tdArray[0], tdArray[1], tdArray[2]);
            return true;
        } else if (tdArray[3].childNodes.length && tdArray[6].childNodes.length && tdArray[0].childNodes[0].data == tdArray[3].childNodes[0].data && tdArray[0].childNodes[0].data == tdArray[6].childNodes[0].data) {
            cambiarFondo(tdArray[0], tdArray[3], tdArray[6]);
            return true;
        } else if (tdArray[4].childNodes.length && tdArray[8].childNodes.length && tdArray[0].childNodes[0].data == tdArray[4].childNodes[0].data && tdArray[0].childNodes[0].data == tdArray[8].childNodes[0].data) {
            cambiarFondo(tdArray[0], tdArray[4], tdArray[8]);
            return true;
        }
    }

    return false;
}

function validarCinco() {
    if (tdArray[4].childNodes.length) {
        if (tdArray[1].childNodes.length && tdArray[7].childNodes.length && tdArray[4].childNodes[0].data == tdArray[1].childNodes[0].data && tdArray[4].childNodes[0].data == tdArray[7].childNodes[0].data) {
            cambiarFondo(tdArray[4], tdArray[1], tdArray[7]);
            return true;
        } else if (tdArray[3].childNodes.length && tdArray[5].childNodes.length && tdArray[4].childNodes[0].data == tdArray[3].childNodes[0].data && tdArray[4].childNodes[0].data == tdArray[5].childNodes[0].data) {
            cambiarFondo(tdArray[4], tdArray[3], tdArray[5]);
            return true;
        } else if (tdArray[6].childNodes.length && tdArray[2].childNodes.length && tdArray[6].childNodes[0].data == tdArray[4].childNodes[0].data && tdArray[4].childNodes[0].data == tdArray[2].childNodes[0].data) {
            cambiarFondo(tdArray[4], tdArray[6], tdArray[2]);
            return true;
        }
    }

    return false;
}

function validarNueve() {
    if (tdArray[8].childNodes.length) {
        if (tdArray[5].childNodes.length && tdArray[2].childNodes.length && tdArray[8].childNodes[0].data == tdArray[5].childNodes[0].data && tdArray[8].childNodes[0].data == tdArray[2].childNodes[0].data) {
            cambiarFondo(tdArray[8], tdArray[5], tdArray[2]);
            return true;
        } else if (tdArray[7].childNodes.length && tdArray[6].childNodes.length && tdArray[8].childNodes[0].data == tdArray[7].childNodes[0].data && tdArray[8].childNodes[0].data == tdArray[6].childNodes[0].data) {
            cambiarFondo(tdArray[8], tdArray[7], tdArray[6]);
            return true;
        }
    }

    return false;
}

function toggleSeleccionada(tdSeleccionada=null) {
    for (var i = tdArray.length - 1; i >= 0; i--) {
        tdArray[i].classList.remove('seleccionada');
    }
    if (tdSeleccionada) {
        tdSeleccionada.classList.add('seleccionada');
    }
}

function cambiarFondo(td1, td2, td3) {
    td1.classList.add('seleccionada');
    td2.classList.add('seleccionada');
    td3.classList.add('seleccionada');
}



// EVENTOS

for (var i = tdArray.length - 1; i >= 0; i--) {
    tdArray[i].addEventListener('click', e => {
        if (ganada) {
            return;
        }

        toggleSeleccionada();
        divPregunta.innerHTML = '';
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }

        if (e.target.childNodes.length) {
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * preguntas.length-1) + 1;
        let pregunta = preguntas[numeroAleatorio].pregunta;
        let respuestas = preguntas[numeroAleatorio].respuestas;
        let idCorrecta = preguntas[numeroAleatorio].correcta;
        respuestaCorrecta = preguntas[numeroAleatorio].respuestas[idCorrecta-1];
        tdClick = document.getElementById(e.target.id);
        toggleSeleccionada(tdClick);
        
        divPregunta.innerHTML = pregunta;

        respuestas.forEach(respuesta => {
            let radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'respuestas');
            radio.setAttribute('id', 'respuesta'+respuesta.id);
            radio.setAttribute('value', respuesta.id);

            let label = document.createElement('label');
            label.setAttribute('for', 'respuesta'+respuesta.id);
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
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let radios = e.target.respuestas;
    let cambiaTurno = false;

    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.value == respuestaCorrecta.id) {
                let equisCirculo = turno ? 'X' : 'O';
                let texto = document.createTextNode(equisCirculo);
                tdClick.appendChild(texto);
                if (validarUno() || validarCinco() || validarNueve()) {
                    alert('Gana ' + equisCirculo);
                    ganada = true;
                    sessionStorage.setItem('turno', turno);
                }
            } else {
                alert('Error. La correcta era ' + respuestaCorrecta.respuesta);
            }
            if (!ganada) { tdClick.classList.remove('seleccionada'); }
            cambiaTurno = true;
        }
    });

    if (cambiaTurno) {
        turno = !turno;
        spanTurno.innerHTML = turno ? 'X' : 'O';
        tdSeleccionada = null;
        divPregunta.innerHTML = '';
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
    } else {
        alert('Escoge una opción');
    }
});

window.addEventListener('load', e => {
    window.turno = sessionStorage.getItem('turno');
    
    if (turno === null) {
        sessionStorage.setItem('turno', true);
    } else {
        sessionStorage.setItem('turno', turno);
    }

    turno = sessionStorage.getItem('turno');
    spanTurno.innerHTML = turno === "true" ? 'X' : 'O';
});

btnReiniciar.addEventListener('click', function() {
    location.reload();
});