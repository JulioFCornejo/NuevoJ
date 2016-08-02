/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo
var ancho
var respuesta
largo= document.getElementById("Largo").value;
ancho= document.getElementById("Ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
respuesta = (largo*2)+(ancho*2);
	alert("se necesitan "+respuesta*3+" metros de alambre");
}
function Circulo () 
{
var radio
var respuesta
	radio=parseInt(document.getElementById("Radio").value);
	respuesta= 3.14*(radio*radio)
		alert("Se necesitan "+respuesta*3+" metros de alambre para el terreno circular");
}
function Materiales () 
{
var largo
var ancho
var cemento=2
var cal=3
largo= document.getElementById("Largo").value;
ancho= document.getElementById("Ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
respuesta= (largo * ancho);
	alert("se necesitan "+cal* respuesta+" bolsas de cal y "+cemento*respuesta+" bolsas de cemento");
}