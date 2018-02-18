let respuestaCorrecta, tdClick;
let divPregunta = document.getElementById('pregunta');
let form = document.getElementById('form');
let spanTurno = document.getElementById('turno');
let tdArray = document.getElementsByTagName('td');
let turno = true;
let preguntas = [
    {
        "pregunta": "¿Qué es el proceso de decisión de compra?",
        "respuestas": [
            {"id": 1, "respuesta": "a"},
            {"id": 2, "respuesta": "b"},
            {"id": 3, "respuesta": "c"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿Cuáles son las etapas del proceso de decisión de compra?",
        "respuestas": [
            {"id": 1, "respuesta": "d"},
            {"id": 2, "respuesta": "e"},
            {"id": 3, "respuesta": "f"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿De qué trata la etapa de IDENTIFICACIÓN DEL PROBLEMA?",
        "respuestas": [
            {"id": 1, "respuesta": "g"},
            {"id": 2, "respuesta": "h"},
            {"id": 3, "respuesta": "i"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿De qué trata la etapa de BÚSQUEDA DE INFORMACIÓN?",
        "respuestas": [
            {"id": 1, "respuesta": "j"},
            {"id": 2, "respuesta": "k"},
            {"id": 3, "respuesta": "l"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿De qué trata la etapa de ANÁLISIS DE LAS ALTERNATIVAS?",
        "respuestas": [
            {"id": 1, "respuesta": "m"},
            {"id": 2, "respuesta": "n"},
            {"id": 3, "respuesta": "o"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿De qué trata la etapa de COMPRA?",
        "respuestas": [
            {"id": 1, "respuesta": "p"},
            {"id": 2, "respuesta": "q"},
            {"id": 3, "respuesta": "r"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "¿De qué trata la etapa de POSCOMPRA?",
        "respuestas": [
            {"id": 1, "respuesta": "s"},
            {"id": 2, "respuesta": "t"},
            {"id": 3, "respuesta": "v"}
        ],
        "correcta": 1
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

function toggleSeleccionada(tdSeleccionada) {
    for (var i = tdArray.length - 1; i >= 0; i--) {
        tdArray[i].classList.remove('seleccionada');
    }

    tdSeleccionada.classList.add('seleccionada');
}

function cambiarFondo(td1, td2, td3) {
    td1.classList.add('seleccionada');
    td2.classList.add('seleccionada');
    td3.classList.add('seleccionada');
}



// EVENTOS

for (var i = tdArray.length - 1; i >= 0; i--) {
    tdArray[i].addEventListener('click', e => {
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }

        let numeroAleatorio = Math.floor(Math.random() * preguntas.length-1) + 1;
        let pregunta = preguntas[numeroAleatorio].pregunta;
        let respuestas = preguntas[numeroAleatorio].respuestas;
        let idCorrecta = preguntas[numeroAleatorio].correcta;
        respuestaCorrecta = preguntas[numeroAleatorio].respuestas[idCorrecta-1];
        tdClick = document.getElementById(e.target.id);
        toggleSeleccionada(tdClick);
        
        divPregunta.innerHTML =  pregunta;

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
    let ganada = false;

    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.value == respuestaCorrecta.id) {
                let equisCirculo = turno ? 'X' : 'O';
                let texto = document.createTextNode(equisCirculo);
                tdClick.appendChild(texto);
                if (validarUno() || validarCinco() || validarNueve()) {
                    alert('Gana ' + equisCirculo);
                    ganada = true;
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
    } else {
        alert('Escoge una opción');
    }
});

window.addEventListener('load', e => {
    spanTurno.innerHTML = turno ? 'X' : 'O';
});
