function Mostrar()
{

	var contador=0;
	var numero;
	var max;
	var min;
	// declarar variables
	
	//numero=prompt("INGRESE UN NUEVO NUMERO O INGRESE no PARA TERMINAR");
	//	numero=parseInt(numero);
	while(numero != 'no') {
		numero = prompt("INGRESE UN NUEVO NUMERO O INGRESE no PARA TERMINAR");
		if (numero != "no"){ 
		numero = parseInt(numero);
		contador ++;
		if (contador == 1 ) {
			max = numero
			min = numero
		}
		else {
			if (numero > max)

				max = numero

			if (numero < min)

				min = numero
			
		}
		}
	}
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN