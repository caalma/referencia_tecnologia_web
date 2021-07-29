var G = {};

var dibujar_en_canvas = function(selector){
	var c = document.getElementById(selector);
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx.stroke();
}

var iniciar = function(ev){
	//alert('hola HTML');
	dibujar_en_canvas('imagen_canvas')
}


window.addEventListener('load', iniciar);