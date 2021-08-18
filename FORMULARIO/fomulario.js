'use strict'
var contenedor = document.getElementById('contenedor');
var name = prompt('Bienvenido. ¿Cual es su nombre?');
alert('Bienvenido '+name + ', su nombre es muy feo.');

var confirmación = prompt('¿Desea cambiarlo?');



switch (confirmación){
    case 'si': 
    alert('Perfecto, ahora llene el formulario')
    contenedor.style.opacity= '1';
    break;

    case 'Si': 
    alert('Perfecto, ahora llene el formulario')
    contenedor.style.opacity= '1';
    break;

    case 'no': 
    alert('Entonces siga con su nombre feo')
    break;

    case 'No': 
    alert('Entonce siga con su nombre feo')
    break;

    default: 
    case 'si': 
    alert('Responda bien, pendejo :v')
    break;

   
}











var fomulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    nacionalidad = formulario.nacionalidad,
    edad = formulario.edad,
    nuevoName = formulario.nuevoName,
    terminos = formulario.terminos,
    sexo = formulario.sexo,
    error = document.getElementById('error');



function validarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        alert('Por favor ingresa tu nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>'
        e.preventDefault();
    }

    if (nombre.value.length >20){
        alert('Error, el nombre supera el máximo de caracteres permitidos');
        e.preventDefault();
    }

}

function validarNacionalidad(e) {

    if (nacionalidad.value == '' || nacionalidad.value == null) {
        alert('Por favor ingresa tu nacionalidad');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa la nacionalidad</li>';
        e.preventDefault();
    }

    if (nacionalidad.value.length >20){
        alert('Error, la nacionalidad supera el máximo de caracteres permitidos');
        e.preventDefault();
    }

}
function validarEdad(e) {

    
   
    if (isNaN(edad.value)){
        alert('Error, solo se permiten numeros');
        e.preventDefault();
    }
    
    else{
        if (edad.value == '' || edad.value == null) {
            alert('Por favor ingresa tu edad');
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor completa la edad</li>';
            e.preventDefault();
        }
        else {
            if (edad.value < 18) {
                alert('Stop!!! Eres menor de edad.')
                error.style.display = 'block';
                error.innerHTML += '<li>Debes ser mayor de edad para poder cambiarte el nombre</li>';
                e.preventDefault();
            }
           
            else if (edad.value.length >2){
                alert('Error, la edad supera el máximo de caracteres permitidos');
                e.preventDefault();
            }


        }
    
    }
    
   



}
function validarNuevoNombre(e) {

    if (nuevoName.value == '' || nuevoName.value == null) {
        alert('Por favor ingresa tu nuevo nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nuevo nombre</li>';
        e.preventDefault();
    }

    else{
        if (nuevoName.value == nombre.value){
            alert('Error, los nombre son iguales');
            error.style.display = 'block';
            error.innerHTML += '<li>El nuevo nombre tiene que ser diferente al anterior</li>';
            e.preventDefault();
        }
        if (nuevoName.value.length >20){
            alert('Error, el nuevo nombre supera el máximo de caracteres permitidos');
            e.preventDefault();
        }
    }

   
}

function validarSexo(e) {

    if (sexo.value == '' || sexo.value == null) {
        alert('Por favor selecciona un sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor selecciona un sexo</li>';
        e.preventDefault();
    }
}
function validarTerminos(e) {

    if (!terminos.checked) {
        alert('Por favor acepta los términos y condiciones');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor acepta los términos y condiciones</li>';
        e.preventDefault();
    }


}

function validarFormulario(e) {
    error.innerHTML = '';
    validarNombre(e);
    validarNacionalidad(e);
    validarEdad(e);
    validarNuevoNombre(e);
    validarSexo(e);
    validarTerminos(e);
    validarCorreo(e);

}

formulario.addEventListener('submit', validarFormulario);



