/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{


}
function NumerosPares ()
{
	var numero
	var pares=0;
	numero = document.getElementById("numero").value;
	if (numero < 0){
 		alert("el numero ingresado debe ser positivo")
 	}
	while (numero > 0 ){
		if (numero % 2 == 0 )
		{
			pares = pares + 1
		}
		numero = numero - 1

	}
	alert("LA CANTIDAD DE PARES SON "+pares)
	
}
function NumerosPares ()
{
	var numero
	var pares=0;
	numero = document.getElementById("numero").value;
	if (numero < 0){
 		alert("el numero ingresado debe ser positivo")
 	}
	while (numero > 0 ){
		if (numero % 2 != 0 )
		{
			pares = pares + 1
		}
		numero = numero - 1

	}
	alert("LA CANTIDAD DE PARES SON "+pares)
}
function NumerosDivisibles ()
{
	var divisibles=0
	var numero;
	numero = document.getElementById("numero").value;
	if (numero < 0){
		alert("el numero ingresado debe ser positivo")
	}
	while (numero > 0) {
		if (numero % numero == 0) {
			divisibles = divisibles + 1
		}
		if (divisibles >= 100){
			alert("limite de divisibles alcanzado")
			break;
		}
		numero = numero - 1
	}
	alert("cantidad de numeros divisibles: "+divisibles)
}
function VerificarPrimo ()
{
var numero;
numero = document.getElementById("numero").value
if (numero % numero = 0 || numero % 1 == 0) {
	alert("el numero es primo")
}