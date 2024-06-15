function calcularLitros(){
    var elementoKm = document.getElementById("textoKm");
    var textoKm = elementoKm.value;
    var cantKm = Number(textoKm);
    var cantLitros=Math.round(cantKm / 8.8);
    var resultado = document.getElementById("textoResultado");
    resultado.textContent =" Carga " + cantLitros + " litros de combustibles ";
}