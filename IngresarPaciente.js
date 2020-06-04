var nombre = document.getElementById('nombre')
var documento = document.getElementById('documento')
var genero = document.getElementById('sexo')
var eps = document.getElementById('eps')
var edad = document.getElementById('edad')
var telefono = document.getElementById('telefono')
var direccion = document.getElementById('direccion')
var imagen = document.getElementById('imagen')


console.log(nombre.value)
$('.custom-file input').change(function (e) {
    if (e.target.files.length) {
        $(this).next('.custom-file-label').html(e.target.files[0].name);
    }
});

var form = document.getElementById('formulario')
 form.addEventListener('submit',function(evt){
     evt.preventDefault();
     if ((nombre.value=='')||(documento.value=='')||(genero.value=="Seleccione")||(eps.value=="Seleccione")
        ||(edad.value=='')||(telefono.value=='')||(direccion.value=='')||(imagen.value=='')){
           alert('se debe llenar todos los campos');
     }
     else{
        axios({
            method: 'post',
            url: "http://161.35.110.128/api/v1/login/access-token",
            data: Qs.stringify({
              username: 'grupo3',
              password: 'grupo32019'
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }).then(response=>{
              console.log(response)
              localStorage.setItem("token", response.data.access_token)
            })

        
              console.log(localStorage.getItem("token"))
         
              
        axios({
            method: 'post',
            url: "http://161.35.110.128/api/v1/paciente/",
            data: {
                "custom_id": documento.value,
                "name": nombre.value,
                "age": edad.value,
                "b64": "string",
                "image_url": imagen.value,
                "gender": genero.value,
                "eps": eps.value
              },
            headers: {
              'content-type': 'application/json',
              'Authorization': "Bearer " + localStorage.getItem("token")
            }
          }).then(response=>{
              console.log(response)
        })
     }
 });