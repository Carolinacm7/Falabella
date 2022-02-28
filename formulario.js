         
        var formulario = document.getElementById('formulario');
        var email = formulario.email;
        var contraseña = formulario.contraseña;
      


function validar(e){

        if (contraseña.value.length > 10 ){
            alert('Numero de caracteres excedido');
        }else if(contraseña.value == ''){
            alert('Ingrese su contraseña')
        }
        else if(correo.value == ''){
            alert('Ingrese su correo')
        }
        
        e.preventDefault();

}


         formulario.addEventListener('submit',validar);