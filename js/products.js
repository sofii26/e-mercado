
var prods = [];
var minPrecio;
var maxPrecio;
var Busqueda;

function MostrarProds(array){ 
let lista= "";
for(let i = 0; i < array.length; i++){ 
    let productos = array[i];
    if (((minPrecio == undefined) || (parseInt(productos.cost)>= minPrecio)) &&
     ((maxPrecio == undefined) || (parseInt(productos.cost) <= maxPrecio))) {
         if (Busqueda == undefined || productos.name.toLowerCase().includes(Busqueda) || productos.description.toLowerCase().includes(Busqueda)){ 
// fijarme si dentro del string (el producto convertido en minus) está incluido en lo que guardé en mi variable busqueda,
// es decir, lo que el usuario escribió en el input.
   
    lista += `
    <div class: prodEstilo, style= "margin-left:30px">
    <h2 style ="color: crimson; font-weight: bold"> ` + productos.name + ` </h2> 
    <img src="` + productos.imgSrc + `" class="imagencitas"> 
    <p> ` + "<br>" + 'Descripción: ' + productos.description + `</p>
    <p> ` + 'Costo: ' + productos.cost + " " + productos.currency + ` </p>
    <p> ` + 'Vendidos: ' + productos.soldCount + ` </p>
   </div>
    `
}
     }
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



function OrdenarDesc() {
    prods.sort(function(a, b){
if (a.cost > b.cost) {
    return -1;
}
if (a.cost < b.cost) {
    return 1;
}
else {
    return 0;
}
    });
MostrarProds(prods)
};

document.getElementById("PrecioDesc").addEventListener("click", function() {
        OrdenarDesc();
    })


function OrdenarAsc() {
prods.sort(function(a, b){ // método sort aplicado a mi array de productos. Recibe como parámetro la función de comparación
if (a.cost > b.cost) { // según un criterio de ordenamiento
return 1; // modifica el índice a ese a y a ese b. Los mueve más para atrás o más para adelante según el criterio. 
}
if (a.cost < b.cost) {
return -1; // para quedar antes tiene que tener un índice menor
}
else { // si son iguales
return 0;
}
});
MostrarProds(prods) 
};

document.getElementById("PrecioAsc").addEventListener("click", function() {
    OrdenarAsc();
})


function Relevancia() {
    prods.sort(function(a, b){
        if (a.soldCount > b.soldCount) {
            return -1;
        }
        if (a.soldCount < b.soldCount) {
            return 1;
        }
        else {
            return 0;
        }
    });
    MostrarProds(prods)
    };

document.getElementById("relevancia").addEventListener("click", function() {
    Relevancia();
})

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("MinPrecio").value = "";
    document.getElementById("MaxPrecio").value = "";

    minPrecio = undefined;
    maxPrecio = undefined;

    MostrarProds(prods);
});

document.getElementById("rangeFilterCount").addEventListener("click", function(){

    minPrecio = document.getElementById("MinPrecio").value;
    maxPrecio = document.getElementById("MaxPrecio").value;

    if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio)) >= 0){
        minPrecio = parseInt(minPrecio);
    }
    else{
        minPrecio = undefined;
    }

    if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0){
        maxPrecio = parseInt(maxPrecio);
    }
    else{
        maxPrecio = undefined;
    }

    MostrarProds(prods);
});

document.getElementById("Buscar").addEventListener("input", function(){ // al momento de cambiar el value se desata el evento
Busqueda = document.getElementById("Buscar").value.toLowerCase(); // método aplicado a un string, transforma el string en minus.
MostrarProds(prods); // llamo a la función para que actualice el listado
})