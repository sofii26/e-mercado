//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const DESAFIO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json"
var article;



function calcularTotal() {
    let total = 0
    let subs = document.getElementsByClassName("subtotal");
    for (let i = 0; i < subs.length; i++) {
        total += parseInt(subs[i].innerHTML);
    }
    document.getElementById("total").innerHTML = total;


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
            
            <div class="mb-3 ml-4 col-lg-4 col-md-7 col-sm-7"> 
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



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(DESAFIO_URL)
        .then(function (resultado) {
            if (resultado.status === "ok") {
                article = resultado.data.articles;
                cart(article);

            }
        });
});






