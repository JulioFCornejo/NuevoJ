/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numuno
	var numdos
	var suma
	numuno= parseInt(document.getElementById("numeroUno").value);
	numdos= document.getElementById("numeroDos").value;
	numdos=parseInt(numdos);
	suma=(numuno+numdos);
	alert("la suma es "+suma)

}

function restar()
{
	var numuno
	var numdos
	var resta
	numuno= parseInt(document.getElementById("numeroUno").value);
	numdos= document.getElementById("numeroDos").value;
	numdos=parseInt(numdos);
	resta=(numuno-numdos);
	alert("la resta es "+resta);
}

function multiplicar()
{ 
	var numuno
	var numdos
	var multi
	numuno= parseInt(document.getElementById("numeroUno").value);
	numdos= document.getElementById("numeroDos").value;
	numdos=parseInt(numdos);
	multi=(numuno*numdos);
	alert("la multiplicacion es "+multi);
}

function dividir()
{
	var numuno
	var numdos
	var divi
	numuno= parseInt(document.getElementById("numeroUno").value);
	numdos= document.getElementById("numeroDos").value;
	numdos=parseInt(numdos);
	divi=(numuno/numdos);
	alert("la division es "+divi)
}


