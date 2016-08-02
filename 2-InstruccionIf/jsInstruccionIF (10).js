function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random
random=Math.floor(Math.random()*(10-1)+1)
if (random>8){
	alert("excelente "+random);

}
else{
	if (random>4){
		alert("aprobo "+random)
	}
	else
	alert(" mas suerte la proxima "+random)
	}//FIN DE LA FUNCIÓN
   
   
}