/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto=0; 
var contadorIntentos=0;
var numero=0
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random()*(100-1))+1;
		alert(numeroSecreto);
}
function verificar()
{
	
numero=parseInt(document.getElementById("numero").value)
	while (numero!=numeroSecreto&&numero>0&&numero<100){
		contadorIntentos=contadorIntentos+1
		document.getElementById("intentos").value=contadorIntentos
		if (numero>numeroSecreto){
			alert("SE PASO, INTENTE NUEVAMENTE");
		}
		else {
			if (numero<numeroSecreto){
				alert("LE FALTO, INTENTE NUEVAMENTE");
			}
		}
	break;
	}
	if (numero==numeroSecreto){
		alert("USTED ES EL GANADOR!!! Y SOLO EN "+contadorIntentos+" INTENTOS");
		contadorIntentos=0
		comenzar()
	}
}