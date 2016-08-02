/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var conversion;
	temperatura=parseInt(document.getElementById("Temperatura").value);
	conversion=(temperatura-32)/1.800000
		alert(temperatura+" Fahrenheit son "+conversion+" Centigrados")
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var conversion;
	temperatura=parseInt(document.getElementById("Temperatura").value);
	conversion=(temperatura*1.800000)+32
		alert(temperatura+" Centigrados son "+conversion+" Fahrenheit");
}
