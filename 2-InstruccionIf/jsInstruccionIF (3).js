function Mostrar()
{
//tomo la edad  
var edad
edad= document.getElementById("edad").value;
edad=parseInt(edad);
if (edad<18){
	alert("la persona es menor")
}
else{
	alert("la persona es mayor")
}
}//FIN DE LA FUNCIÓN