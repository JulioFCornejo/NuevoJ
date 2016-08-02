function Mostrar()
{

var contador=0;
var positivo=0;
var negativo=0;
var numeros=0
var respuesta;
while (respuesta!="salir"){
	numeros=prompt("Ingrese un numero positivo o negativo");
	respuesta=prompt("Ingrese salir si desea TERMINAR");
	numeros=parseInt(numeros)
	contador=contador+1
	if (numeros=>1){
		positivo=numeros+contador
	}
	else{
		if (numeros<0){
			negativo=numeros*contador
		}
	}
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN