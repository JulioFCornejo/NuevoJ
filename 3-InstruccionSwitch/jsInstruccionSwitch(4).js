function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño){
	case "Febrero":
		alert("Este mes tiene 28 dias");
	break;
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert(mesDelAño+" Este mes tiene 31 dias")
	break;
	default:
		alert(mesDelAño+" Este mes tiene 30 dias");
	
}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN