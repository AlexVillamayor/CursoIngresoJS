/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
//Alex Villamayor Division D
function mostrar()
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12&&edad<18)
	{
		alert("Es adolescente");
	}
	else
	{
		alert("No es un adolescente");
	}

}//FIN DE LA FUNCIÓN