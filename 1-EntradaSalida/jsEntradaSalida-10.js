/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo
	var descuento
	sueldo=parseInt(document.getElementById("importe").value);
	descuento=sueldo*0.25;
		document.getElementById("resultado").value=descuento

}
