/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var operacion;
var resultado;
function comenzar()
{

	numeroUno = parseInt(Math.floor(Math.random() * (11 - 1)) + 1 );
	numeroDos = parseInt(Math.floor(Math.random() * ( 11 - 1 )) + 1 );
	operacion = Math.floor(Math.random())
	document.getElementById("PrimerNumero").value = numeroUno;
	document.getElementById("SegundoNumero").value = numeroDos;
	document.getElementById("Operador").value = operacion;
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = parseInt(document.getElementById("Respuesta").value)
		if (respuesta != resultado) {
			alert("EL RESULTADO ES INCORRECTO, TRATE OTRA VEZ!!")
		}
		else
			alert("FELICIDADES EL RESULTADO ES CORRECTO!!!")
}//FIN DE LA FUNCIÓN
