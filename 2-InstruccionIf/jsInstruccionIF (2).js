function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
if(edad >=18) {
alert("es mayor de edad");
}
else {
	alert("es menor");
}
}
//FIN DE LA FUNCIÓN