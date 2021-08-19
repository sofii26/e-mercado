//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.  
var prods = [];

function MostrarProds(array){
let lista= "";
for(let i = 0; i < array.length; i++){ 
    let productos = array[i];
    lista += `
    <div class: prodEstilo, style= "margin-left:30px">
    <h2 style ="color: crimson; font-weight: bold"> ` + productos.name + ` </h2> "<br>"
    <img src="` + productos.imgSrc + `" class="imagencitas"> "<br>"
    <p> ` + 'Descripción: ' + productos.description + `</p>
    <p> ` + 'Costo: ' + productos.cost + " " + productos.currency + ` </p>
    <p> ` + 'Vendidos: ' + productos.soldCount + ` </p>
   </div>
    `
    document.getElementById("prodHTML").innerHTML = lista;
}
}

document.addEventListener("DOMContentLoaded", function (e) {
getJSONData(PRODUCTS_URL)
.then(function(resultado) {
    if(resultado.status === "ok")
    {
        prods = resultado.data;
        MostrarProds(prods);

    }
});
});