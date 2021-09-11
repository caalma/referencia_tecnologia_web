/*
  En Javascript los comentarios multilinea se rodean
  con la barra diagonal ascendente "/" seguida de el asterisco "*".
  Como en este comentario
*/

// Los comentarios de una línea se inician con la doble barra diagonal ascendente "//"
// Como en estas líneas. Incluyen todo el texto hasta hasta cambiar a una línea nueva.



/* 
  Los siguiente ejemplos deben verificarse desde la consola javascript del navegador,
  a la que se puede acceder presionando Ctrl + Shift + C, o también presionando F12 y
  llendo a la pestaña 'console' del panel de desarrollador.
  Esta pruebas también pueden probarse interactivamente dentro de esa consola.
*/


/* -------------------------------------------------------------------------- EJEMPLO
   Usos mínimos del lenguaje.
*/

// Declaramos una variable boleana y le asignamos el valor "true".
var activar_ejemplo_basico = true;  // Esta variable acepta otro valor posible y es "false" (sin las comillas).

/*  Con esta estructura 'if' comprobamos que 'activar_ejemplo_basico' sea "true" y en ese caso 
    ejecutamos todas las sentencias internas. */
if (activar_ejemplo_basico) {

    // Definimos variables de texto y operamos con ellas para generar una tercera. 
    var texto1 = "lenguaje";
    var texto2 = 'programación';
    var texto3 = texto1 + ' de ' + texto2;

    // Mostramos el contenido de la variable en la consola javascript del navegador.
    console.log(texto3);

    // Definimos una variable numérica
    var numero = 3;    
    var cuadrado_de_numero = numero * numero;
    console.log(cuadrado_de_numero);
}



/* -------------------------------------------------------------------------- EJEMPLO
   Tipos de variables disponibles.
*/

var activar_ejemplo_variables = true;

if (activar_ejemplo_variables) {

    // Number / Número
    // Integer / Entero 
    var entero = 10;
    // Float / Flotante o decimal
    var flotante = 1.5;
    console.log(entero, flotante, entero + flotante);

    // String / Texto (lista de signos)
    // Pueden definirse indistitamente con comillas simple o dobles.
    var texto = "abcdefg ... XYZ ! 0123456789 !!";
    var texto2 = '0123456789 nuevo';
    console.log(texto, texto2);

    // Array / Arreglo, lista
    var lista = [11, "uno", ["dos", 2], 3.3];
    console.log(lista, lista[1]);

    // Object / Objeto, Diccionarios
    var objeto = { 
      uno: 1, 
      dos: "DOOOS",
      2: "tres"
    };
    console.log(objeto, objeto.uno, objeto["2"] );

    // Boolean / Boleano
    var estoesjavascript = true;
    var estoeshtml = false;
    console.log(estoesjavascript, estoeshtml);

    // Undefined / Indefinido
    var algo;
    var algo2 = undefined;
    console.log(algo, algo2);

    // Null / Nulo, Inexistente
    var nada = null;
    console.log(nada);

    // NaN / NoEsNumérico
    var noPuedesSumarmeUnNumero = NaN;
    console.log(noPuedesSumarmeUnNumero);

    // Function / Función
    var suma = function(n){ 
      return n + n;
    }
    function resta_de_cuadrados(a, b){
      return (a * a) - (b * b);
    }

    console.log(suma(3), resta_de_cuadrados(3, 2));
}



/* -------------------------------------------------------------------------- EJEMPLO
   Condicionales 'if, else if, else'
*/

var activar_ejemplo_condicionales = true;

if(activar_ejemplo_condicionales){
  
  if(true){
    console.log('condicion valida')
  }

  if('' === ' '){
    console.log('texto vacio');
  }else{
    console.log('no es lo mismo');
  }


  var opcion = 2;
  if(opcion == 1){
    console.log('Primero');
  }else if(opcion === 2){
    console.log('Segundo');
  }else if(opcion === 3){
    console.log('Tercero');
  }else{
    console.log('¿?');
  }

  if (false){
    var opcion_num = prompt('Dime un número');
    if(typeof(opcion_num) === 'string'){
      if(opcion_num.length == 0){
        opcion_num = null;
      }else{
        opcion_num = parseInt(opcion_num);
      }
    }
    console.log(typeof(opcion_num), opcion_num);
  }

  if(opcion_num === NaN || opcion_num === null){
    console.log('El valor ingresado no es un número')
  }else{
    if(opcion_num < 0){
      console.log('Número negativo');
    }else if(opcion_num > 0){
      console.log('Número positivo');
    }else{
      console.log('El cero, también es positivo.');
    }
  }
}



/* -------------------------------------------------------------------------- EJEMPLO
   Ciclo 'for' 
*/

var activar_ejemplo_ciclo_for = true;

if (activar_ejemplo_ciclo_for) {

  for (var i = 0; i <= 10; i = i + 1) {
    console.log(i + " ");
  }

  var items = ["uno", "dos", "tres"],
      indice, valor;
  for (indice in items){
    valor = items[indice];
    console.log(indice, valor);
  }
  for (e of items){
    console.log(e);
  }
}



/* -------------------------------------------------------------------------- EJEMPLO
   Ciclo 'while' y ciclo 'do, while' 
*/

var activar_ejemplo_ciclo_while = true;

if (activar_ejemplo_ciclo_while) {
  var num = 0;
  while(num < 20){
    document.write(num + ",");
    num ++;
  }

  do{
    console.log(num);
    num --;
  }while(num > 15);
}



/* -------------------------------------------------------------------------- EJEMPLO
   Funciones
*/

var activar_ejemplo_funciones = false;

if (activar_ejemplo_funciones) {
  
  var nombre;

  function saludo(tipo="Hola"){
    if(nombre === undefined || nombre === null || nombre.length == 0){
      nombre = prompt("Dime tu nombre :");
      if(nombre === null || nombre === ""){
        nombre = "SinNombre";
      }
    }
    console.log(tipo + " " + nombre);
  }
  saludo();
  saludo("Chau");
}



/* -------------------------------------------------------------------------- EJEMPLO
   Agregamos contenido dinámicamente o modificamos el contenido previo de algunos
   tags específicos. Mediante los métodos directos de javascript y los disponibles
   en JQuery.
*/

var activar_bloque_presentacion = true;

if (activar_bloque_presentacion) {

  // Quitamos la clase "oculto" del tag con el ID "presentacion".
  $('#presentacion').removeClass('oculto');

  // Seleccionamos el tag con el 'id' "título"
  var el_tit = document.getElementById('titulo');
  // y cambiamos todo su contenido textual a mayúsculas.
  el_tit.innerText = el_tit.innerText.toUpperCase();


  // Seleccionamos el tag con el 'id' "definicion"
  var el_def = document.getElementById('definicion');
  // y le incluimos el siguiente texto dentro de su contenido.
  el_def.innerText = 'es un lenguaje de programación interpretado.';

  // Declaramos una lista de palabras
  var items = [
    'variables',
    'condicionales',
    'ciclos',
    'funciones',
    'objetos',
    'eventos',
  ];
  /*  Seleccionamos el primer elemento de todos los que posean "lista"
      en el atribuno 'name'. Aquí utilizamos JQuery para hacer la selección. */
  var $el_lista = $('[name=lista]').eq(0);
  /*  Con la función 'forEach' de la "ítems", recorremos todos sus palabras
      y las agregamos dentro del contenido de "$el_lista". */
  items.forEach(function(tex){
    $el_lista.append('<li>' + tex + '</li>');
  });
}



/*  -------------------------------------------------------------------------- EJEMPLO
    Se agregan dos estilos al mismo elemento, utilizando propiedades de javascript, 
    y también mediante JQuery. 
*/

var activar_cambios_de_estilo = true;

if (activar_cambios_de_estilo) {
  el_tit.className += ' rojo';
  $(el_tit).addClass('grande');
}



/*  -------------------------------------------------------------------------- EJEMPLO
    Se agregan dos estilos al mismo elemento, utilizando propiedades de javascript, 
    y también mediante JQuery. 
*/

var activar_bloque_pantalla_completa = true;

if (activar_bloque_pantalla_completa) {

  /*  Definimos las funciones que llamaremos al pulsar los botones.
      Utilizando dos métodos, el primero asignando la función a una
      variable, y el segundo nombrando directamente la variable.
      Ambas notaciones son válidas. 
      El condicional 'if, else if' en ambas funciones se encarga de 
      aportar compatibilidad con varios entornos de navegadores. */

  var openFullscreen = function(){
    var el = document.documentElement;
    if(el.requestFullscreen){
      el.requestFullscreen();
    } else if(el.webkitRequestFullscreen){
      el.webkitRequestFullscreen();
    } else if(el.msRequestFullscreen){
      el.msRequestFullscreen();
    }
  }

  function closeFullscreen(){
    if(document.fullscreen){
      if(document.exitFullscreen){
        document.exitFullscreen();
      }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
      }else if(document.msExitFullscreen){
        document.msExitFullscreen();
      }
    }
  }

  $("#botones").removeClass("oculto");   

  /*  Se selecciona mediante 'querySelector' el botón para acceder a pantalla completa
      y se asigna la función al evento de hacer "click" sobre el boton */
  document.querySelector('[name=entrar_a_fullscreen]').onclick = function(){
    openFullscreen();
  };

  /*  Se procede a hacer lo mismo sobre el botón para salir de pantalla completa
      pero utilizando JQuery */
  $("[name=salir_de_fullscreen]").on('click', function(){
    closeFullscreen();
  });
}



/*  -------------------------------------------------------------------------- EJEMPLO
    Se realiza la carga de datos externos mediante una solicitud get, con el objetivo
    de validar un email que ingresa el usuario de la página por medio de un formulario. 
*/

var activar_bloque_formulario = true;

if (activar_bloque_formulario) {
  
  $("#formulario").removeClass("oculto");

  /*  Se selecciona el tag con 'id' "respuesta" 
      para utilizarlo con las siguiente funciones. */
  var el_respuesta = document.querySelector('#respuesta');

  /*  Se declaran varias funciones auxiliares que se llaman al enviar los datos
      mediante el formulario. 

      Esta función se encarga de leer los datos del servidor, y realizar las
      acciones necesarias según si está presente el 'email' pasado a la función
      en la base de datos */

  var acceder_por_email = function (email){
    var pedido = $.ajax({
      url: '../extra/registros.json',   // El archivo que se cargará.
      method: 'GET',                  // El método de solicitud usado.
      dataType: 'json',               // El tipo de datos esperado.
    });

    /*  La función 'done' se ejecutará cuando el servidor nos entregue los
        datos pedidos. */ 
    pedido.done(function(datos){
      var d;
      /*  Mediante un ciclo 'for' se pasa por items de la base de datos
          y en caso de encontrar una email igual al ingresado por el usuario
          se mostrarán los datos particulares de ese usuario. En caso de que
          ninguno de los email de la base de datos coincida con el email de 
          control se emitirá un alerta con el mensaje de error. */
      for(d of datos){
        if(d.email === email){
          mostrar_datos_personales(d);
          return;
        }
      }
      el_respuesta.innerHTML = '<strong>ERROR: <span class="error">' + email + '</span> no está registrado!</strong>';
    });
  }

  /*  Utilizando los datos enviados por parámetro 'dat' se formatean los items
      a mostrar y se incluyen como contenido el tag con el 'id' "respuesta" */
  var mostrar_datos_personales = function(dat){
    var items = [
      '<p>Nombre: <b>'+dat.nombre+'</b></p>',
      '<p>Email: <b>'+dat.email+'</b></p>',
      '<p>Pasatiempo: <b>'+dat.pasatiempo+'</b></p>',
    ];
    el_respuesta.innerHTML = items.join('');
  }

  /*  Se borra todo el contenido de datos personales. */
  var limpiar_respuesta = function(){
    el_respuesta.innerHTML = '';
  }

  // Mediante JQuery se selecciona el campo email por su 'id'
  var $cmp_email = $('#email');

  /*  Se selecciona el formulario y se aplican las acción llevadas a cabo
      cuando quieran enviarse los datos ingresados. */
  $('#form_contacto').on('submit', function(ev){
      // Se evita la acción predeterminada por html. Para poder hacer el envio por javascript.
      ev.preventDefault();
      // Sólo para control del desarrollador se envia un mensaje a la consola de javascript.
      console.log('Envio bloqueado');
      // Se limpia cualquier respuesta previa.
      limpiar_respuesta();
      // Se verifica que el email ingresado pertenece a la base de datos.
      acceder_por_email($cmp_email.val());
      // La siguiente funcion
      $cmp_email.val('');
  });

  /*  Para evitar que el usuario ingrese un email con mayúsculas, se aplica una acción
      que se ejecutará cada vez que se cambie el valor del campo email. Dicha acción
      simplmente tomará el valor actual y lo convertirá a minúsculas, reasignándolo al
      campo email. */
  $cmp_email.on('change', function(ev){
      var el = $(this);
      var valor = el.val().toLowerCase(); 
      el.val(valor);
  });
}



/*  -------------------------------------------------------------------------- EJEMPLO
    Los tags multimedia 'audio' y 'video' también disponen de métodos y valores que
    podemos utilizar desde javascript para controlar su interacción.
    En este caso simplemente modificamos el volumen, y reproducimos o detenemos
    los recursos desde javascript.
*/

var activar_bloque_multimedia = true;

if (activar_bloque_multimedia) {
  $('#multimedia').removeClass('oculto');

  // Seleccionamos el tag audio y le modificamos el volumen.
  var el_audio = document.querySelector('audio[name=test]');
  el_audio.volume = 0.7;

  /*  Seleccionamos el tag video y también un botón que nos permitirá
      controlar su pausa o reproducción. */ 
  var el_video = document.querySelector('video[name=test]');
  $('#reproducir_video').on('click', function(ev){
    if (el_video.paused){
      el_video.play();
    }else{
      el_video.pause();
    }
  });
}



/* -------------------------------------------------------------------------- EJEMPLO
   Funcionalidad para asignar acción de botón a elementos html que no la poseen.
   Aquí se utiliza la librería JQuery, mediante su nombre alternativo el "$".
   Más información sobre esta líbrería puede hallarse en : http://jquery.com/
*/

var activar_boton_js = true;

if (activar_boton_js) {
  // Seleccionamos los botones
  var botonesJS = $('[name=botonJS]');
  // y le asignamos a todos un título mediante atributo.
  botonesJS.attr('title',  'Botón Javascript');

  // Definimos la acción que llamada al dar click sobre cualquiera de los botonesJS.
  botonesJS.on('click', function(){
    var $el = $(this);
    var url = $el.attr('url');
    document.location.href = url;
  });
}