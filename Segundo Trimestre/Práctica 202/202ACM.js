//Contador caracteres
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
mensaje.addEventListener('input', function(e) {
const target = e.target;
const longitudAct = target.value.length;
contador.innerHTML = `Caracteres restantes:${500 - longitudAct}`;
});

//Añadir curso
function nuevoCurso() {
    var cursos = document.getElementById("cursos");
    var anadirCurso = document.getElementById("anadirCurso");

    if (cursos.value === "anadir") {
        anadirCurso.style.display = "block";
    } else {
        anadirCurso.style.display = "none";
    }
}

document.getElementById("incluir").addEventListener("click", function() {
    var nuevoCurso = document.getElementById("curso").value;
    var cursos = document.getElementById("cursos");

    if (nuevoCurso.trim() !== "") {
        var option = document.createElement("option");
        option.text = nuevoCurso;
        option.value = nuevoCurso;
        cursos.add(option);
        document.getElementById("curso").value = "";
        document.getElementById("anadirCurso").style.display = "none";
    } else {
        alert("No se puede añadir un campo vacío");
    }
});

//Seleccionar/deseleccionar todo
function seleccionarTodo() {
    var checkboxes = document.getElementsByClassName("dia");
    var selectTodoCheckbox = document.getElementById("todos");

    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = selectTodoCheckbox.checked;
    }
  }

//Validación
window.onload = iniciar;
function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "No puede dejar este campo vacío");
        }
        return false;
    }
    return true;
}

function validarNIF() {
    var elemento = document.getElementById("nif");
    if (elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "No puede dejar este campo vacío");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "El NIF tiene que ser 8 números seguidos de una letra");
        }
        return false;
    }
    return true;
}

function validarMensaje(){
    var elemento = document.getElementById("mensaje")
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error(elemento, "No puede dejar el campo mensaje vacío")
        }
        if (elemento.validity.rangeUnderflow) {
            error(elemento, "Mínimo 2 caracteres");
        }
        if (elemento.validity.rangeOverflow) {
            error(elemento, "Máximo 500 caracteres");
        }
        return false
    }
    return true
}

function validarFechaMatriculacion() {
    var elemento = document.getElementById("fecha");
    if (elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "No puede dejar este campo vacío");
        }
        return false;
    }
    return true;
}

/*
function validarDiasDisponibles() {
    
}
*/

function validar(e) {
    borrarError();
    if (validarNombre() && validarNIF() && validarMensaje() && validarFechaMatriculacion() /*&& validarDiasDisponibles()*/) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML=mensaje;
    elemento.className="error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i=0; i<formulario.elements.length; i++) {
        formulario.elements[i].className="";
    }
}