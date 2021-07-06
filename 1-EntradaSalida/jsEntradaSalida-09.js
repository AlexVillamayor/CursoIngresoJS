/*Alex Villamayor Division D
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado;
var aumento;	

sueldo= document. getElementById('txtIdSueldo').value;
sueldo= parseInt(sueldo);

aumento = sueldo*(10/100);
resultado = sueldo + aumento;

document. getElementById('txtIdResultado').value=resultado.toFixed(2);
	
}
//txtIdResultado
//txtIdSueldo
// Otra forma es poner sueldo*1.1