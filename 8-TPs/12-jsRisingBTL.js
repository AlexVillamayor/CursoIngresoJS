/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 Alex Villamayor Division D*/
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldo;
 	var legajo;
 	var nacionalidad;
 
  	edadIngresada=prompt("Ingrese su edad:");
 	edadIngresada=parseInt(edadIngresada);
 	
 	while(edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Su edad no es valida, ingrese otra:");
 		edadIngresada=parseInt(edadIngresada);
	}
	document.getElementById('txtIdEdad').value=edadIngresada;

	sexoIngresado=prompt("Ingrese su sexo: (F/M)")
 	while(sexoIngresado!= 'F' && sexoIngresado!='M')
 	{
 		sexoIngresado=prompt("Su sexo no es valido, ingreselo nuevamente: ");
 	}
 	document.getElementById('txtIdSexo').value=sexoIngresado;

 	estadoCivilIngresado=prompt("Ingrese el numero segun su estado civil 1-Soltero 2-Casado 3-Divorciado 4-Viudo");
 	estadoCivilIngresado=parseInt(estadoCivilIngresado);

 	while (estadoCivilIngresado<1 || estadoCivilIngresado>4)
 	{
 		estadoCivilIngresado=prompt("Su estado civil no es valido, Ingrese su estado civil nuevamente");
 	}
 	document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;

 	sueldo=prompt("Ingrese su sueldo bruto:");
 	sueldo=parseInt(sueldo);

 	while(sueldo<8000)
 	{
 		sueldo=prompt("Su sueldo no es valido, ingreselo nuevamente: ");
 		sueldo=parseInt(sueldo);
 	}
 	document.getElementById('txtIdSueldo').value=sueldo;

 	legajo=prompt("Ingrese su numero de legajo: ");
 	legajo=parseInt(legajo);

 	while(legajo <1000 || legajo >9999)
 	{
 		legajo=prompt("Su numero de legajo no es valido, ingreselo nuevamente: ");
 		legajo=parseInt(legajo);
 	}
 	document.getElementById('txtIdLegajo').value=legajo;
 	
	nacionalidad=prompt("Ingrese su nacionalidad: A - Argentinos E - Extranjeros N - Nacionalizados ");

	while( nacionalidad!= 'A' && nacionalidad != 'E' && nacionalidad !='N')
	{
		nacionalidad=prompt("Su nacionalidad no es valida, ingresela nuevamente: ");
	}
	document.getElementById('txtIdNacionalidad').value=nacionalidad;
}
/* txtIdSexo
 txtIdEstadoCivil
 txtIdSueldo
 txtIdLegajo
 txtIdNacionalidad
 document.getElementById('txtIdEdad').value=edadIngresada;
*/