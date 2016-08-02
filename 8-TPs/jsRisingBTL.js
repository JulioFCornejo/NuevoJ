/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
var edad;
var sexo;
var estadoCivil;
var sueldoBruto;
var legajo;
var nacionalidad;
edad=prompt("INGRESE SU EDAD");
edad=parseInt(edad);
	while (edad<18||edad>90){
		alert("La edad no debe ser menor de 18 y tampoco superar 90");
		edad=prompt("INGRESE SU EDAD");
		edad=parseInt(edad)
	}		
		document.getElementById("Edad").value=edad

sexo=prompt("INGRESE M PARA MASCULINO O F PARA FEMENINO");
	while (sexo!="m"&&sexo!="f") {
		sexo=prompt("INGRESE M PARA MASCULINO O F PARA FEMENINO");
	}
		if (sexo="m"){
			document.getElementById("Sexo").value="MASCULINO"
		}
		else{
			document.getElementById("Sexo").value="FEMENINO"
		}	
estadoCivil=prompt("INGRESE 1 PARA SOLTERO 2 PARA CASADO 3 PARA DIVORCIADO O 4 PARA VIUDO");
estadoCivil=parseInt(estadoCivil);
	while (estadoCivil<1||estadoCivil>4){
		alert("INGRESE UNA OPCION VALIDA");
		estadoCivil=prompt("INGRESE 1 PARA SOLTERO 2 PARA CASADO 3 PARA DIVORCIADO O 4 PARA VIUDO");
		estadoCivil=parseInt(estadoCivil);
	}
	switch (estadoCivil){
		case 1:
			document.getElementById("EstadoCivil").value="SOLTERO";
			break;
		case 2:
			document.getElementById("EstadoCivil").value="CASADO";
			break;
		case 3:
			document.getElementById("EstadoCivil").value="DIVORCIADO";
			break;
		case 4:
			document.getElementById("EstadoCivil").value="VIUDO";
			break;
		default:
			alert("DEBE INGRESAR 1 PARA SOLTERO 2 PARA CASADO 3 PARA DIVORCIADO O 4 PARA VIUDO");
	}
sueldoBruto=prompt("INGRESE SU SUELDO BRUTO");
sueldoBruto=parseInt(sueldoBruto);
	while (sueldoBruto<8000){		
		sueldoBruto=prompt("INGRESE SU SUELDO BRUTO, DEBE SER MAYOR A 8000");
		sueldoBruto=parseInt(sueldoBruto);
	}
	document.getElementById("Sueldo").value=sueldoBruto;

legajo=prompt("INGRESE SU NUMERO DE LEGAJO");
legajo=parseInt(legajo);
	while (legajo<1000) {
		alert("EL NUMERO DE LEGAJO NO PUEDE SER MENOR A 1000");
		legajo=prompt("INGRESE SU NUMERO DE LEGAJO")
		legajo=parseInt(legajo)
	}
		document.getElementById("Legajo").value=legajo;

nacionalidad=prompt("INGRESE a SI ES ARGENTINO, e SI ES EXTRANJERO O n SI ES NACIONALIZADO");
	while (nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n") {
		nacionalidad=prompt("INGRESE a SI ES ARGENTINO, e SI ES EXTRANJERO O n SI ES NACIONALIZADO");
	}	
	switch(nacionalidad){
		case "a":
			document.getElementById("Nacionalidad").value="ARGENTINO";
			break;
		case "e":
			document.getElementById("Nacionalidad").value="EXTRANJERO";
			break;
		case "n":
			document.getElementById("Nacionalidad").value="NACIONALIZADO";
			break;
		default:
			alert("DEBE INGRESAR UNA OPCION CORRECTA")
	}

}
