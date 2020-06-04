var nombre = document.getElementById('nombre')
var email = document.getElementById('email')
var telefono = document.getElementById('telefono')
var mensaje= document.getElementById('mensaje')

var form = document.getElementById('contacto')
 form.addEventListener('submit',function(evt){
     evt.preventDefault();
     if ((nombre.value=='')||(email.value=='')||(telefono.value=='')||(mensaje.value=='')){
         alert('Se debe llenar todos los campos');
     }
     else{
        alert('Datos guardados');
        nombre.value=''
        telefono.value=''
        email.value=''
        mensaje.value=''
     }
    });