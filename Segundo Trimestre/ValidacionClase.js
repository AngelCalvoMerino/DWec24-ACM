window.onload = iniciar;
function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.checkValidity()) {
        //error(element);
        if (elemento.validity.valueMissing) {
            error2=(elemento, "No puede dejar este campo vacío");
        }
        if (elemento.validity.patternMissmatch) {
            error2=(elemento, "Debe contener entre 2 y 15 caracteres");
        }
        return false;
    }
    return true;
}

function validarEdad() {
    var elemento = document.getElementById("edad");
    if (elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}

function validarTelefono() {
    var elemento = document.getElementById("telefono");
    if (elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}

function validar(e) {
    borrarError();
    if (validarNombre() && validarEdad() && validarTelefono() && confirm ("¿está seguro/a?")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML=elemento.validationMessage;
    elemento.className="error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i=0; i<formulario.elements.length; i++) {
        formulario.elements[i].className="";
    }
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML=mensaje;
    elemento.className="error";
    elemento.focus();
}