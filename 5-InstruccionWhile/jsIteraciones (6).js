function Mostrar()
{
var numeros=0
var promedios=0
var acumulador=0
var sumas=0
while (numeros<5){
	sumas=prompt("Ingrese el numero")
	numeros=numeros+1
	acumulador=acumulador+sumas
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}
//FIN DE LA FUNCIÓN