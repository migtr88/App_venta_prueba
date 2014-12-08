var x=$(document);
x.ready(activaEvento);

<!--Función que activa los eventos //-->

function activaEvento(){

x=$("#botonA");
x.click(agrega);
}

function agrega(){

	var opcion=$("select option:selected").text();
	var contenido=$("#contacto").val()+"-"+$("#descripcion").val();
	var t=$("#nombre").val();
	var n=t.split(" ");
	var titulo="";
	
	for(var i in n){
		titulo=titulo+"-"+n[i];
		
	}
		$.post('/agrega/'+opcion+'/'+titulo+'/'+contenido,function(data){
    $("#Resultado").html('Se ha añadido: '+t+" con datos "+contenido);
  });
	
}


