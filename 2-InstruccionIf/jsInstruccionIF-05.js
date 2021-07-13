/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Alex Villamayor Division D */
function mostrar()
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12!=edad<18)
	{
		alert("No es adolescente");
	}
	
}