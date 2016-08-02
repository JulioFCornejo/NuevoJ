function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño) {
	case "Enero":
		alert(mesDelAño+" Que comiences bien el año ")
		break;
	case "Marzo":
		alert(mesDelAño+" A classes! ")
		break;
	case "Julio":
		alert(mesDelAño+" Se vienen las vacaciones ");
		break;
	case "Diciembre":
		alert(mesDelAño+" Felices fiestas ")
		break;
	default:
		alert(mesDelAño+" El año continua...")

}



}//FIN DE LA FUNCIÓN