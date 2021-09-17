//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var product;

function mostrarInfo(array) {

    let imagencita = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        imagencita += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("prodImagesGallery").innerHTML = imagencita;
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCost = document.getElementById("productCost");
            let productVendidos = document.getElementById("vendidos");
            let productCategory = document.getElementById("productCategory");
            let productRelated = document.getElementById("relatedProducts");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCost.innerHTML = product.cost;
            productVendidos.innerHTML = product.soldCount;
            productCategory.innerHTML = product.category;
            productRelated.innerHTML = product.relatedProducts;

            mostrarInfo(product.images);
        }
    });
});

var comentarios;
function showComentarios(array){ 
    let listado= "";
    for(let i = 0; i < array.length; i++){ 
        let comments = array[i]; 
        
        if (comments.score == 1) { listado += `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>`

        }
        if (comments.score == 2) { listado += `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>`

        }
        if (comments.score == 3) { listado += `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> `
    }
    if (comments.score == 4) { listado += `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
    
    `
    }
    if (comments.score == 5) { listado += `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span> `
    }   
    


        listado += `
        <div style= "margin: 50px">
        <div class="d-block mb-4 h-100">
       <p> ` + comments.description + ` <p>
       <div style= "font-weight:bold"> <p style= "font-size:13px"> ` + comments.user + ` <p> </div>
       <p style= "font-size:13px"> ` + comments.dateTime + ` <p>
       <hr>
       </div>
       </div>
       `
    
         
        document.getElementById("comentarios").innerHTML = listado;
    
    }
}
    
    
    document.addEventListener("DOMContentLoaded", function (e) { 
    getJSONData(PRODUCT_INFO_COMMENTS_URL) 
    .then(function(resultado) {
        if(resultado.status === "ok")
        {
            comentarios = resultado.data;
            showComentarios(comentarios);
    
        }
    });
    });

