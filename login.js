/*datos de prueba y Elementos por defecto*/
baseDeDatos= localStorage.getItem("sistema-de-login")
if(!baseDeDatos){
cargardatosiniciales()
}
function cargardatosiniciales () {
baseDeDatos ={
1234567890:{
contraseña:"abc",
puntos: 0
},
"0987654321":{
contraseña:"def",
puntos: 0
},
};
}
swal.fire("Funcionando")
