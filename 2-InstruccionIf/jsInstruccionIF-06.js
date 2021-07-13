/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
Alex Villamayor Division D */
function mostrar()
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if(edad>12)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es un niño");
		}
	}
	
}

	/*if(edad>12&&edad<18)
	{
		alert("Es adolescente");
		
	}	
	if(edad<13)
	{
		alert("Es un niño");
	}
	if(edad>17)
	{
		alert("Es mayor");
	}*/
