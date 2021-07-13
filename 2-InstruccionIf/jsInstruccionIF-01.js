/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	var edad;
	
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad==15)
	{
		alert("Niña bonita");
	}

}
/*

operadores 
relacionales: < > <= >= !=  verdadero - falso ==
logicos: y (&&) - o (||) - no (!)
== comparacion
= asignacion
*/