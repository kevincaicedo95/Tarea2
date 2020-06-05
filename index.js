//retornamos los valores ingresados
var usuario= document.getElementById('usuario')
var contrasena = document.getElementById('contrasena')

var form = document.getElementById('login')
 form.addEventListener('submit',function(evt){
     evt.preventDefault();
     if ((usuario.value=='')||(contrasena.value=='')){
         alert('Debe ingresar usuario y contraseña');
     }
     else{
         if ((usuario.value=="grupo3")&&(contrasena.value=="grupo32019")){
         axios({
            method: 'post',
            url: "http://161.35.110.128/api/v1/login/access-token",
            data: Qs.stringify({
            username: usuario.value,
            password: contrasena.value
            }),
            headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
            })
            .then(response=>{
            console.log(response)
            localStorage.setItem("token", response.data.access_token)
            window.location.replace('inicio.html')
            });
        }
        else alert("Usuario y contraseña incorrectos")
        usuario.value='';
        contrasena.value='';
     }
    })
