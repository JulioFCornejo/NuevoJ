/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
function comenzar()
{
	
	eleccionMaquina=Math.floor(Math.random()*(4-1)+1);


}
//FIN DE LA FUNCIÓN
function piedra()
{

	if (eleccionMaquina==1){
		alert("PIEDRA es un empate")
	}
	else { 
		if (eleccionMaquina==2) {
		alert("PAPEL gana la maquina")
		}
		else  {
		alert("TIJERA gano el usuario")
		}
    }
    comenzar();
}
//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina==2){
		alert("PAPEL es un empate")
	}
	else {
		if (eleccionMaquina==1){
		alert("PIEDRA gano el usuario")
		}
		else {
			alert("TIJERA gano la maquina")
		}
}
comenzar();
}
//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina==3){
		alert("TIJERA es un empate") 
	}
	else
		if (eleccionMaquina==1){
		alert("PIEDRA gano la maquina")
		}
		else {
			alert("PAPEL gano el usuario")
		}
comenzar();
}
//FIN DE LA FUNCIÓN