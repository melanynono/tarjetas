function crearTarjetas() {

    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);

    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");

    for (let i = desde; i <= hasta; i = i + salto) {
        contenido += "<div class='item'>" + i + "</div>";
    }

    divTarjetas.innerHTML = contenido;
}