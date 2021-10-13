//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const DESAFIO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json"
var article;
function cart(array) {
    let lista = "";

    for (let i = 0; i < array.length; i++) {

        let datos = array[i];
        lista +=

            `
            
            <div class="mb-3 ml-4 col-4"> 
            <div class="card bg-light h-100"" style="max-width: 30rem;">
  <img src="${datos.src}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${datos.name}</h5>
    <p class="card-text">${datos.unitCost}  ${datos.currency}</p>
    <div> <a href="#" class="btn btn-primary">${"+"} </a> <p> ${datos.count} Disponibles </p> </div>
  </div>
  </div>
</div>

           
           </div>
            `
    }


    document.getElementById("art").innerHTML = lista;
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


function calcularSubtotal(cantidad, precio) {
      
precio * cantidad;
}

document.getElementById("subtotal").addEventListener("DOMContentLoaded", function(e) {
    calcularSubtotal(datos.unitCost,datos.count)
});



