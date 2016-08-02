function Mostrar()
{

var contador=0;
var acumulador=0;
var numeros=0;
var respuesta;
while (respuesta!="salir"){
	numeros=prompt("Ingrese un numero")
	respuesta=prompt("Ingrese salir si desea TERMINAR")
	numeros=parseInt(numeros)
	contador=contador+1
	acumulador=acumulador+numeros
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN