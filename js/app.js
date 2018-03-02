let respuestaCorrecta, tdClick;
let ganada = false;
let btnReiniciar = document.getElementById('btnReiniciar');
let divPregunta = document.getElementById('pregunta');
let form = document.getElementById('form');
let spanTurno = document.getElementById('turno');
let tdArray = document.getElementsByTagName('td');
let preguntas = [
    {
        "pregunta": "El 35% de los bienes que importa México proviene de países con los que no tiene Tratado de Libre Comercio, lo que genera consecuencias en la economía",
        "respuestas": [
            {"id": 1, "respuesta": "Aranceles"},
            {"id": 2, "respuesta": "Grado de subsidios gubernamentales"},
            {"id": 3, "respuesta": "Ley de propiedad industrial"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "Aranceles",
        "respuestas": [
            {"id": 1, "respuesta": "El 35% de los bienes que importa México proviene de países con los que no tiene Tratado de Libre Comercio, lo que genera consecuencias en la economía"},
            {"id": 2, "respuesta": "La renegociación del Tratado de Libre Comercio de América Latina (TLCAN) ha despertado una preocupación entre muchos sectores productivos del país que han salido beneficiados con este acuerdo, entre ellos, el textil y el de calzado"},
            {"id": 3, "respuesta": "Pese a que ambas Coreas han expresado su disposición a sentarse a la mesa de diálogos y rebajar las tensiones, Estados Unidos no ha dejado de amenazar con más presiones y sanciones a Corea del Norte"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "La renegociación del Tratado de Libre Comercio de América Latina (TLCAN) ha despertado una preocupación entre muchos sectores productivos del país que han salido beneficiados con este acuerdo, entre ellos, el textil y el de calzado",
        "respuestas": [
            {"id": 1, "respuesta": "Regulaciones ambientales"},
            {"id": 2, "respuesta": "Actividades de cabildeo"},
            {"id": 3, "respuesta": "Regulaciones de importaciones y Exportaciones"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "Regulaciones de importaciones y Exportaciones",
        "respuestas": [
            {"id": 1, "respuesta": "Pese a que ambas Coreas han expresado su disposición a sentarse a la mesa de diálogos y rebajar las tensiones, Estados Unidos no ha dejado de amenazar con más presiones y sanciones a Corea del Norte"},
            {"id": 2, "respuesta": "Reelecciones en Cuba. Situación política en Venezuela. Elecciones parlamentarias en E.U."},
            {"id": 3, "respuesta": "La renegociación del Tratado de Libre Comercio de América Latina (TLCAN) ha despertado una preocupación entre muchos sectores productivos del país que han salido beneficiados con este acuerdo, entre ellos, el textil y el de calzado"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "Pese a que ambas Coreas han expresado su disposición a sentarse a la mesa de diálogos y rebajar las tensiones, Estados Unidos no ha dejado de amenazar con más presiones y sanciones a Corea del Norte",
        "respuestas": [
            {"id": 1, "respuesta": "Regulaciones de importaciones y Exportaciones"},
            {"id": 2, "respuesta": "Actividades de cabildeo"},
            {"id": 3, "respuesta": "Relaciones antagónicas entre Estados Unidos y otros países"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "Relaciones antagónicas entre Estados Unidos y otros países",
        "respuestas": [
            {"id": 1, "respuesta": "Las elecciones en México, podrían tener un impacto en la paridad del peso contra el dólar. La incertidumbre sobre el impacto en la paridad, tiene al pendiente a los empresarios, los cuales tienen ganancias y costos en pesos y en dólares"},
            {"id": 2, "respuesta": "Reelecciones en Cuba. Situación política en Venezuela. Elecciones parlamentarias en E.U."},
            {"id": 3, "respuesta": "Pese a que ambas Coreas han expresado su disposición a sentarse a la mesa de diálogos y rebajar las tensiones, Estados Unidos no ha dejado de amenazar con más presiones y sanciones a Corea del Norte"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "Reelecciones en Cuba. Situación política en Venezuela. Elecciones parlamentarias en E.U.",
        "respuestas": [
            {"id": 1, "respuesta": "Actividades de cabildeo"},
            {"id": 2, "respuesta": "Condiciones políticas en países extranjeros"},
            {"id": 3, "respuesta": "Regulaciones de importaciones y Exportaciones"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "Las elecciones en México, podrían tener un impacto en la paridad del peso contra el dólar. La incertidumbre sobre el impacto en la paridad, tiene al pendiente a los empresarios, los cuales tienen ganancias y costos en pesos y en dólares",
        "respuestas": [
            {"id": 1, "respuesta": "Aranceles"},
            {"id": 2, "respuesta": "Grado de subsidios gubernamentales"},
            {"id": 3, "respuesta": "Elecciones locales, estatales y nacionales"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "Estas actividades son para informar a personas o instituciones cuyo poder de decisión o presión puede afectar la actividad de una empresa, institución o comunidad",
        "respuestas": [
            {"id": 1, "respuesta": "Regulaciones de importaciones y Exportaciones"},
            {"id": 2, "respuesta": "Actividades de cabildeo"},
            {"id": 3, "respuesta": "Regulaciones ambientales"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "Instituto Mexicano de la Propiedad Industrial: organismo público descentralizado con personalidad jurídica, patrimonio propio y autoridad legal para administrar el sistema de propiedad industrial en nuestro país",
        "respuestas": [
            {"id": 1, "respuesta": "Ley de propiedad industrial"},
            {"id": 2, "respuesta": "Grado de subsidios gubernamentales"},
            {"id": 3, "respuesta": "Condiciones políticas en países extranjeros"}
        ],
        "correcta": 1
    },
    {
        "pregunta": "Los programas , fondos y subsidios federales, donde varias secretarías como: la secretaria de comunicaciones y transportes, secretaria de desarrollo social, secretaria de gobernación, secretaria de salud, la secretaria de educación publica, entre otras; realizan un plan nacional de desarrollo",
        "respuestas": [
            {"id": 1, "respuesta": "Regulaciones ambientales"},
            {"id": 2, "respuesta": "Grado de subsidios gubernamentales"},
            {"id": 3, "respuesta": "Ley de propiedad industrial"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "Grado de subsidios gubernamentales",
        "respuestas": [
            {"id": 1, "respuesta": "Las elecciones en México, podrían tener un impacto en la paridad del peso contra el dólar. La incertidumbre sobre el impacto en la paridad, tiene al pendiente a los empresarios, los cuales tienen ganancias y costos en pesos y en dólares"},
            {"id": 2, "respuesta": "Los programas , fondos y subsidios federales, donde varias secretarías como: la secretaria de comunicaciones y transportes, secretaria de desarrollo social, secretaria de gobernación, secretaria de salud, la secretaria de educación publica, entre otras; realizan un plan nacional de desarrollo"},
            {"id": 3, "respuesta": "Estas actividades son para informar a personas o instituciones cuyo poder de decisión o presión puede afectar la actividad de una empresa, institución o comunidad"}
        ],
        "correcta": 2
    },
    {
        "pregunta": "Estados Unidos mantiene un etiquetado “dolphin safe” con el que establece que el atún fue pescado bajo prácticas que no ponen en riesgo a los delfines, un sello que no le ha otorgado a México a pesar de que aquí se cumplen con los estándares internacionales de pesca",
        "respuestas": [
            {"id": 1, "respuesta": "Ley de propiedad industrial"},
            {"id": 2, "respuesta": "Aranceles"},
            {"id": 3, "respuesta": "Regulaciones ambientales"}
        ],
        "correcta": 3
    },
    {
        "pregunta": "Regulaciones ambientales",
        "respuestas": [
            {"id": 1, "respuesta": "Instituto Mexicano de la Propiedad Industrial: organismo público descentralizado con personalidad jurídica, patrimonio propio y autoridad legal para administrar el sistema de propiedad industrial en nuestro país"},
            {"id": 2, "respuesta": "Los programas , fondos y subsidios federales, donde varias secretarías como: la secretaria de comunicaciones y transportes, secretaria de desarrollo social, secretaria de gobernación, secretaria de salud, la secretaria de educación publica, entre otras; realizan un plan nacional de desarrollo"},
            {"id": 3, "respuesta": "Estados Unidos mantiene un etiquetado “dolphin safe” con el que establece que el atún fue pescado bajo prácticas que no ponen en riesgo a los delfines, un sello que no le ha otorgado a México a pesar de que aquí se cumplen con los estándares internacionales de pesca"}
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