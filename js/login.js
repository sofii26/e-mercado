//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(){
 document.getElementById("ingreso").addEventListener("click", function() {

     let inputEmail = document.getElementById("inputEmail");
     let inputPassword = document.getElementById("inputPassword");
     let campos = true;
         if (inputEmail.value === "") {
         inputEmail.classList.add("invalido");
         campos = false;
     }
     else {
         inputEmail.classList.remove("invalido");
     }
     if (inputPassword.value === "") {
         inputPassword.classList.add("invalido");
         campos = false;
     }
     else {
         inputPassword.classList.remove("invalido");
     }
     if (campos) {
         localStorage.setItem('UsuarioIn', JSON.stringify({email: inputEmail.value}));
         document.getElementById("ingreso").innerHTML = window.location = "inicio.html";
     }
     else { 
         alert("Falta rellenar campos");
     }
 }
 )});

