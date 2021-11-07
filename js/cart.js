//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const DESAFIO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json"
var article;
let premium = document.getElementById("premium");
let express = document.getElementById("express");
let standard = document.getElementById("standard");
function calcularTotal() {
    let total = 0
    let subs = document.getElementsByClassName("subtotal");
    for (let i = 0; i < subs.length; i++) {
        total += parseInt(subs[i].innerHTML);
    }


    document.getElementById("total").innerHTML = total;
    calcEnvio();


}


function calcularSubtotal(cost, i) {

    let cantidad = parseInt(document.getElementById(`cantidad${i}`).value);

    subtotal = cost * cantidad + " ";

    document.getElementById(`prodSubtotal${i}`).innerHTML = subtotal;
    calcularTotal()

}
function cart(array) {
    let lista = "";

    for (let i = 0; i < array.length; i++) {

        let datos = array[i];

        let sub = datos.unitCost;
        if (datos.currency === "USD") {
            sub = sub * 40
        }

        lista +=

            `
            
            <div class="mb-3 ml-4 col-lg-5 col-md-7 col-sm-7"> 
            <div class="card bg-light " style="max-width: 50rem;">
  <img src="${datos.src}" class="card-img-top" >
  <div class="card-body">
    <h5 style="font-weight:bold" class="card-title">${datos.name}</h5>
    <p class="card-text">${datos.unitCost}  ${datos.currency} c/u  </p>
    <input  type="number" onchange="calcularSubtotal(${sub}, ${i})" id="cantidad${i}" value="${datos.count}" style= "width:80px" min="1" max="5"><hr>
    
     <p> Subtotal: <span class="subtotal" id="prodSubtotal${i}"> ${sub * datos.count} </span>UYU </p>
    
  </div>
  </div>
</div>

           
           </div>
            `
    }


    document.getElementById("art").innerHTML = lista;

    calcularTotal()
}

function calcEnvio() {
    let envio = 0;
    let total = parseInt(document.getElementById("total").innerHTML);

    if (premium.checked) {
        envio = (total * 0.15);

    }
    if (express.checked) {
        envio = (total * 0.07);
    }
    if (standard.checked) {
        envio = (total * 0.05);
    }

    let totalyenvio = total + envio;
    let texto = `
    
    <p> Costo de envío: ${envio}</p>    
    <p class= "text-right"> Total con envío: ${totalyenvio} </p>
    `
    document.getElementById("costoEnvio").innerHTML = texto;
}

function validacion() {
    let flag = true;
    let msg = "";


    let calle = document.getElementById("calle");
    if (calle.value == "") {
        flag = false;
        msg += "Falta la calle "
    }
    let numero = document.getElementById("num");
    if (numero.value == "") {
        flag = false;
        msg += "Falta el número "
    }
    let esq = document.getElementById("esq");
    if (esq.value == "") {
        flag = false;
        msg += "Falta la esquina "
    }


    if (!premium.checked && !standard.checked && !express.checked) {
        flag = false;
        msg += "Elige un tipo de envío "
    }
    let tarjeta = document.getElementById("tarjeta");
    let bancaria = document.getElementById("bancaria");
    let numTarjeta = document.getElementById("numTarjeta");
    let numCuenta = document.getElementById("numCuenta");
    if (!tarjeta.checked && !bancaria.checked || ((tarjeta.checked && numTarjeta.value == "") || (bancaria.checked && numCuenta.value == ""))) {
        flag = false;
        msg += "Elige forma de pago"
    }

    alert(msg);
    return flag;
}


let form = document.getElementById("myForm");
form.addEventListener('submit', function (event) {
    if (!validacion()) {
        event.preventDefault()
        event.stopPropagation()
    } else {
        alert("¡Compra realizada con éxito!")
        
    }
})




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(DESAFIO_URL)
        .then(function (resultado) {
            if (resultado.status === "ok") {
                article = resultado.data.articles;
                cart(article);


            }
        });

});






