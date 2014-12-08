var fs = require('fs');
var express=require('express');
var app = express();
var libros= new Object;
var comics=new Array;
var discos=new Array;
var peliculas=new Array;
var consulta = fs.readFileSync('consultar_formulario.html','utf8');
var ag=fs.readFileSync('agregar_formulario.html','utf8');
var menu=fs.readFileSync('menu_principal.html','utf8');

app.get('/', function (req, res) {
res.send(menu);
});

app.get('/agregar', function (req, res) {
res.send(ag);
});

app.get('/consultar',function(req,res){
res.send(consulta);
});


app.get('/js/:page', function (req, res) {
var js = fs.readFileSync(req.params.page);
res.contentType('text/javascript');
res.send(js);
});

app.post('/agrega/:id/:id1/:id2',function(req, res){

res.contentType('application/json');
var tipo=req.params.id;
if(tipo==='libros'){
libros[req.params.id1] = req.params.id2;
var respuesta='Añadido Libro '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='comics'){
comics[req.params.id1] = req.params.id2;
var respuesta='Añadido comic '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='discos'){
discos[req.params.id1] = req.params.id2;
var respuesta='Añadido disco '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='peliculas'){
peliculas[req.params.id1] = req.params.id2;
var respuesta='Añadido dispositivo '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}


});

app.post('/consulta/:id1/:id2', function (req, res) {

res.contentType('application/json');
var tipo=req.params.id1;

if(tipo==='libros'){
	
	var nameg=(req.params.id2).split("-");
	var name="";
	var cg=(libros[req.params.id2]).split("-");

	var contenido="Contacto: "+"<P>"+cg[0]+"<P>"+" Descripción: "+"<P>"+cg[1];
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}
	var respuesta='Libro buscado: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
if(tipo==='comics'){

	var nameg=(req.params.id2).split("-");
	var name="";
	var cg=(comics[req.params.id2]).split("-");

	var contenido="Contacto: "+"<P>"+cg[0]+"<P>"+" Descripción: "+"<P>"+cg[1];
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}
	var respuesta='Comic buscado: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
if(tipo==='discos'){

	var nameg=(req.params.id2).split("-");
	var name="";
	var cg=(discos[req.params.id2]).split("-");

	var contenido="Contacto: "+"<P>"+cg[0]+"<P>"+" Descripción: "+"<P>"+cg[1];
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}
	var respuesta='Disco buscado: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
if(tipo==='peliculas'){

	var nameg=(req.params.id2).split("-");
	var name="";
	var cg=(peliculas[req.params.id2]).split("-");

	var contenido="Contacto: "+"<P>"+cg[0]+"<P>"+" Descripción: "+"<P>"+cg[1];
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}
	var respuesta='Película buscada: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
});

	app.post('/consultaT/:id',function (req,res){

	res.contentType('application/json');
	var tipo=req.params.id;
	
	if(tipo==='libros'){
	
	var claves=Object.keys(libros);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}
	if(tipo==='comics'){
	
	var claves=Object.keys(comics);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}
	if(tipo==='discos'){
	
	var claves=Object.keys(discos);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}	
	if(tipo==='peliculas'){

	var claves=Object.keys(peliculas);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}

	});

	app.listen(8889);
	console.log('Server running at http://127.0.0.1:8889/');

<!-- Se inicializan algunos datos, para poder hacer consultas -->
var contInic="Pepe(6245545)-Es una novela maravillosa, este ejemplar es de segunda edicion,para más datos contactar.";
var contInic2="Juan(migueltr15@hotmail.com)-Incluye los tres libros, el ejemplar tiene ilustraciones a color,ejemplar del año 1965, precio a acordar.";
var contInic3="Isabel(352253)-Es una primera edición, esta en muy buen estado, siempre lo he cuidado mucho,precio 55€";
libros["-La-sombra-del-viento"]=contInic;
libros["-El-señor-de-los-anillos"]=contInic2;
libros["-Cien-años-de-soledad"]=contInic3;

var comI="Antonio(3243)-Es un ejemplar de la edicion original de Marvel, año 1977";
var comI1="Pedro(241234)-Es un numero 1 del año 1936,precio 500€";
var comI2="Marcos(marcos@gmail.com)-Es el primer numero publicado es España, esta en muy buen estado,contactar para conocer el precio";

comics["-Spiderman"]=comI;
comics["-El-capitan-america"]=comI2;
comics["-Superman"]=comI1;

var d1="Miguel(325355)-Es un ejemplar de edición en vinilo del disco que lanzó a la fama a Bruce Springsteen,esta en buen estado, precio 200€";
var d2="Luis(532523)-Disco del año 1968 de los Beatles, edición de vinilo, en buen estado contactar para hablar del precio";
var d3="Ana(56323634)-Disco de Nirvana en cd del año 1990, en buen estado contactar para hablar del precio";

discos["-Born-to-run"]=d1;
discos["-yesterday"]=d2;
discos["-smell-like-a-teen-spirit"]=d3;

var p1="Laura(532526)-Ejemplar en DVD, precio 10€";
var p2="Goyo(3522)-En VHS, precio 30€";
var p3="Raul(35235345)-En DVD, contactar para el precio";
peliculas["-Regreso-al-futuro"]=p1;
peliculas["-El-bueno-el-feo-y-el-malo"]=p2;
peliculas["-El-cuervo"]=p3;