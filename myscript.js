$(document).ready(function()
{
	// Cargado de pagina AUTISMO INFANTIL
	$("#contenido").load('/HTML/DATOS%20Y%20ESTADISTICAS.HTML');
	
	// Cargado de pagina EL CON AUTISMO
	$("#op1").click(function(event)
	{
		$("#contenido").load('/HTML/DATOS%20Y%20ESTADISTICAS.HTML');
	});
	
	// Cargado de pagina de GUIA EDUCADORES
	$("#op2").click(function(event)
	{
		$("#contenido").load('/HTML/FORMULARIOS.HTML');
	});
	
	// Cargado de pagina de FORMULARIO
	$("#op3").click(function(event)
	{
		$("#contenido").load('/HTML/MOTIVACIONES%20DEL%20ASECINO.HTML');
	});
	
// Cargado de pagina de FORMULARIO
	$("#op3").click(function(event)
	{
		$("#contenido").load('/HTML/QUE%20ES%20EL%20FEMINICIDIO.HTML');
	});

// Cargado de pagina de FORMULARIO
	$("#op3").click(function(event)
	{
		$("#contenido").load('/HTML/QUE%20SE%20PUEDE%20HACER.HTML');
	});

// Cargado de pagina de FORMULARIO
	$("#op3").click(function(event)
	{
		$("#contenido").load('/HTML/REDES%20SOCIALES.HTML');
	});

// Cargado de pagina de FORMULARIO
	$("#op3").click(function(event)
	{
		$("#contenido").load('/HTML/TIPOS%20DE%20FEMINICIDIO.HTML');
	});

	
});

