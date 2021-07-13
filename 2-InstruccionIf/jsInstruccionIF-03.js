/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/
//Alex Villamayor Division D
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
		alert ("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN