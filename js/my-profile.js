
var todd = document.getElementById("todd");


todd.addEventListener("click", function () {
    document.getElementById("todd").classList.add("selected");
    document.getElementById("diane").classList.remove("selected");
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");


    imgCanvas.width = todd.width;
    imgCanvas.height = todd.height;


    imgContext.drawImage(todd, 0, 0, todd.width, todd.height);


    var imgAsDataURL = imgCanvas.toDataURL("image");



    localStorage.setItem("todd", imgAsDataURL);
    localStorage.removeItem("diane");


})

var diane = document.getElementById("diane");


diane.addEventListener("click", function () {
    document.getElementById("diane").classList.add("selected");
    document.getElementById("todd").classList.remove("selected");
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");


    imgCanvas.width = diane.width;
    imgCanvas.height = diane.height;


    imgContext.drawImage(diane, 0, 0, diane.width, diane.height);


    var imgAsDataURL = imgCanvas.toDataURL("image");



    localStorage.setItem("diane", imgAsDataURL);
    localStorage.removeItem("todd");

})

function edadBien() { // esta función la pongo luego junto con el checkValidity(). El problema es que creo que no hace nada. 
    // yo pretendo que cuando el valor del input sea menor a 18 no se guarden los datos, pero se guardan igual y se envía el formulario. La forma que 
    // tuve de arreglar eso fue poniéndole un mínimo al inputEdad en el html y ahí ya no se guardan los datos cuando es menos de 18. Pero si
    // saco ese min="18" del html y en el input pongo algo menor a 18 no se detiene el envío, aunque tenga el !edadBien() en el if dentro del form.addEventListener.
    // No sé si hay algo mal con la función, probé poniéndole un parámetro y tampoco pude.
edad = document.getElementById("inputEdad").value
    if (edad > 18) {
        return true
    }
    else {
        return false
    }
}
var forms = document.querySelectorAll('.needs-validation')


Array.prototype.slice.call(forms)

    .forEach(function (form) {

        form.addEventListener('submit', function (event) {

            let inputmail = document.getElementById("inputmail");
            let inputEdad = document.getElementById("inputEdad");
            let inputTelefono = document.getElementById("inputTelefono");
            let inputnya = document.getElementById("inputnya");
            if (!form.checkValidity() && !edadBien()) {
                event.preventDefault()
                event.stopPropagation()


            }
            else {

                localStorage.setItem('Info', JSON.stringify(
                    {
                        email: inputmail.value,
                        tel: inputTelefono.value,
                        nya: inputnya.value,
                        edad: inputEdad.value
                    }));
                alert("Cambios guardados");
            }


            form.classList.add('was-validated')
        }, false)
    })

document.addEventListener("DOMContentLoaded", function (e) {
    let infoProfile = localStorage.getItem('Info');
    let infoNya = document.getElementById("inputnya");
    let infoEdad = document.getElementById("inputEdad");
    let infoTel = document.getElementById("inputTelefono");
    let infomail = document.getElementById("inputmail");
    let fotoTodd = localStorage.getItem('todd');
    let fotoDiane = localStorage.getItem('diane');



    if (infoProfile) {
        infoProfile = JSON.parse(infoProfile);
        infoNya.value = infoNya.value + infoProfile.nya;
        infoEdad.value = infoEdad.value + infoProfile.edad;
        infoTel.value = infoTel.value + infoProfile.tel;
        infomail.value = infomail.value + infoProfile.email;

    }

    if (fotoTodd) {
        document.getElementById("todd").classList.add("selected")
    }

    if (fotoDiane) {
        document.getElementById("diane").classList.add("selected");
    }
})

function eliminarFoto() {
    localStorage.removeItem("todd");
    localStorage.removeItem("diane");
    document.getElementById("todd").classList.remove("selected");
    document.getElementById("diane").classList.remove("selected");

}






