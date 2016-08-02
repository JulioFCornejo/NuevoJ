/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var preciouno
var preciodos
var preciotres
var sumaPrecio
precioUno = document.getElementById("PrecioUno").value;
preciouno = parseInt(preciouno);
preciodos = document.getElementById("PrecioDos").value;
preciodos = parseInt(preciodos);
preciotres = document.getElementById("PrecioTres").value;
preciotres = parseInt(preciotres);
sumaPrecio = parseInt(sumaPrecio);
sumaPrecio = (preciouno + preciodos + preciotres);
	alert("La suma de los tres precios es "+ sumaPrecio);
}
function Promedio () 
{
var preciouno
var preciodos
var preciotres
var sumaPrecio
preciouno= document.getElementById("PrecioUno").value;
preciouno=parseInt(preciouno);
preciodos= document.getElementById("PrecioDos").value;
preciodos=parseInt(preciodos);
preciotres= document.getElementById("PrecioTres").value;
preciotres=parseInt(preciotres);
sumaPrecio =parseInt(sumaPrecio);
sumaPrecio = (preciouno+preciodos+preciotres);
	alert("El promedio de los precios es "+sumaPrecio/3);
}
function PrecioFinal () 
{
var preciouno
var preciodos
var preciotres
var sumaPrecio
preciouno= document.getElementById("PrecioUno").value;
preciouno=parseInt(preciouno);
preciodos= document.getElementById("PrecioDos").value;
preciodos=parseInt(preciodos);
preciotres= document.getElementById("PrecioTres").value;
preciotres=parseInt(preciotres);
sumaPrecio =parseInt(sumaPrecio);
sumaPrecio = (preciouno+preciodos+preciotres);
	alert("EL TOTAL FINAL MAS EL IVA DEL 21% SERIA "+sumaPrecio*1.21);
}