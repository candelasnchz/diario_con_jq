var diario = (function() {
  
  var arrNoticias = [];
  
  function agregarNoticia() {
    
    //CONSTRUCTOR NOTICIA
    function Noticia () {
      this.titulo = "";
      this.contenido = "";
    }
    


    var noticia = new Noticia ();
      noticia.titulo = $('#tituloForm').val();
      console.log(noticia.titulo);
      noticia.contenido = $('#contenidoForm').val();
      console.log(noticia.contenido);


      
    if (noticia.titulo && noticia.contenido !== null) {
      arrNoticias.push(noticia);
      return true;
    } else {
     return false;
    }
  }
  

 


    function mostrarNoticia() {

    // Agarramos el container de noticias (fijate que metodo usamos)
    if (arrNoticias.length > 0) {


      // capturo el elemento con ID "noticias" (fijate en el HTML)
      var containerNoticias = $("#container");


      // Creamos un par de variables para el titulo y parrafo
      var tituloConFormato;
      var parrafoConFormato;


      // Iteramos sobre el array de noticias
      for (var i = 0; i < arrNoticias.length; i++) {

//var txt2 = $("<p></p>").text("Text."); 
//$('body').append('<p>This is the text in new element.<p>');

        // Creamos los elementos y los asignamos 
        //Lo dejo con createElement pq es mas rapido
        
        tituloConFormato = document.createElement("h2");
        parrafoConFormato = document.createElement("p");
        
        //$( "p" ).append( document.createTextNode( "Hello" ) );
        //$("p").append("Some appended text.");

        console.log(tituloConFormato);

        console.log(parrafoConFormato);

        tituloConFormato.append(arrNoticias[i].titulo);
        parrafoConFormato.append(arrNoticias[i].contenido);


        // Agrego el contenido del titulo y noticias
        containerNoticias.append(tituloConFormato);

        containerNoticias.append(parrafoConFormato);


        // Los agrego al DOM
       // containerNoticias.appendChild(tituloConFormato);
        //containerNoticias.appendChild(parrafoConFormato);
      }

      // Vaciamos el array al finalizar (proba que pasa si sacas esto)
      arrNoticias = [];

      // Como la carga de noticias salio bien, devolvemos "true"
      return true;

    } else {
      // Si no hay nada en el array noticias devolvemos "false"
      return false;
    }

  }


  // entorno publico
  return {
    agregar: function() {
      // hacer algo
      if (agregarNoticia()) {
        return "Carga de noticias exitosa.";
      } else {
        return "No se ha cargado nada.";
      }

    },
    mostrar: function() {
      if (mostrarNoticia()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    }
  };

})();

//var add = document.getElementById("add");
//add.onclick = diario.agregar;
var add = $("#add");
console.log(add);
$(add).click(diario.agregar);

//var show = document.getElementById("show");
//show.onclick = diario.mostrar;

var show = $("#show");
$(show).click(diario.mostrar);

console.log("se cargo el js ya");
