function calcularPotencia() {
    var base = document.getElementById("base").value;
    var exponente = document.getElementById("exponente").value;
    
    var resultadoOperador = base ** exponente;
    var resultadoMath = Math.pow(base, exponente);
    
    document.getElementById("resultadoPotencia").innerHTML = "Resultado (operador): " + resultadoOperador + "<br>Resultado (Math): " + resultadoMath;
  }
  
  function calcularRaiz() {
    var numero = document.getElementById("numero").value;
    
    var resultado = Math.sqrt(numero);
    
    document.getElementById("resultadoRaiz").innerHTML = "Resultado: " + resultado;
  }
  
  function calcularCircunferencia() {
    var radio = document.getElementById("radio").value;
    
    var circunferencia = 2 * Math.PI * radio;
    
    document.getElementById("resultadoCircunferencia").innerHTML = "Circunferencia: " + circunferencia;
  }
  
  function calcularArea() {
    var diametro = document.getElementById("diametro").value;
    
    var radio = diametro / 2;
    var area = Math.PI * Math.pow(radio, 2);
    
    document.getElementById("resultadoArea").innerHTML = "Área: " + area;
  }
  
  