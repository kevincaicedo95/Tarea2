var documento = document.getElementById('documento');

var form = document.getElementById('buscar')
 form.addEventListener('submit',function(evt){
     evt.preventDefault();
     if (documento.value==''){
         alert('Debe ingresar documento');
     }
     else{
        axios.get('http://161.35.110.128/api/v1/paciente/'+documento.value)
        .then(function (response) {
            if (response.data.length==0)alert("Usuario no encontrado")
            else{
                //Guardamos datos en variables
                var nombre=response.data.name;
                var id_D=response.data.custom_id;
                var edad=response.data.age + " años";
                var imagen=response.data.image_url;
                if (response.data.gender=="1")var genero="Masculino";
                else var genero="Femenino"
                if (response.data.eps=="1")var eps="IPS UDEA";
                else if (response.data.eps=="2")var eps="COOMEVA";
                else if (response.data.eps=="3")var eps="SURA";
                else if (response.data.eps=="4")var eps="CRUZ BLANCA";
                else if (response.data.eps=="5")var eps="MEDIMAS";
                //Enviamos datos
                document.getElementById('nombre').innerHTML = nombre;
                document.getElementById('documento_id').innerHTML = id_D;
                document.getElementById('edad').innerHTML = edad;
                document.getElementById('eps').innerHTML = eps;
                document.getElementById('genero').innerHTML = genero;
                document.getElementById('imagen').innerHTML = imagen;
            }
        })
     }
    });