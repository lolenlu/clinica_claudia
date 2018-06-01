function inicio() {
            
           
        $("#cuerpo_prin").empty();
              
             

    $("#cuerpo_prin").html("<div class='row' id='main_1'>");
    $("#main_1").html("<div class='intro-text' id='main_11'>");
    $("#main_11").html('<div id="thumbnail-preview-indicators" class="carousel slide" data-ride="carousel" style="border-radius:38px;">"');
    $("#thumbnail-preview-indicators").html('<ol class="carousel-indicators">')
    .append('<div class="carousel-inner">')
    .append("<div class='control-box'>");
    $(".carousel-indicators").html('<li data-target="#thumbnail-preview-indicators" data-slide-to="0" class="active"><div class="thumbnail"><img class="img-responsive" src="img/galeria/galery-1.jpg"></div></li>')
    .append('<li data-target="#thumbnail-preview-indicators" data-slide-to="1"><div class="thumbnail"><img class="img-responsive" src="img/galeria/galery-3.jpg"></div></li>')
    .append('<li data-target="#thumbnail-preview-indicators" data-slide-to="2"><div class="thumbnail"><img class="img-responsive" src="img/galeria/galery-4.jpg"></div></li>')
    .append('<li data-target="#thumbnail-preview-indicators" data-slide-to="3"></li>');
    $(".carousel-inner").html('<div class="item slides active"><div class="slide-1"></div><div class="container"><div class="carousel-caption"><h1>Chocolaterapia</h1><p>Tratamiento especial de carácter relajante y rejuvenecedor</p></div></div></div>')
    .append('<div class="item slides"><div class="slide-2"></div><div class="container"><div class="carousel-caption"><h1>Cosmética</h1><p>Lleva tu estilo y tendencia con nuestros productos más innovadores</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Productos cosmética</a></p></div></div></div>')
    .append('<div class="item slides"><div class="slide-3"></div><div class="container"><div class="carousel-caption"><h1>Ofertas y Descuentos</h1><p>Consigue ahora un 20% de descuento en tus sesiones de depilación y otros servicios</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Depilación</a></p></div></div></div>')
    .append('<div class="item slides"><div class="slide-4"></div><div class="container"><div class="carousel-caption"><h1>Tips & Consejos</h1><p>¿Te gusta estar informado de las últimas novedades en belleza y salud?. Observa las últimas publicaciones</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Belleza y Salud</a></p></div></div></div>');
    $(".control-box").html("<a class='left carousel-control' href='#thumbnail-preview-indicators' role='button' data-slide='prev'><span class='control-icon prev fa fa-chevron-left' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>")
.append("<a class='right carousel-control' href='#thumbnail-preview-indicators' role='button' data-slide='next'><span class='control-icon next fa fa-chevron-right' aria-hidden='true'></span><span class='sr-only'>Next</span></a>");

        			}

/*  <div id="thumbnail-preview-indicators" class="carousel slide" data-ride="carousel" style="border-radius:70px;">
          
        <ol class="carousel-indicators">

            <li data-target="#thumbnail-preview-indicators" data-slide-to="0" class="active"><div class="thumbnail"><img class="img-responsive" src="img/galeria/galery-1.jpg"></div></li>

            <li data-target="#thumbnail-preview-indicators" data-slide-to="1"><div class="thumbnail"><img class="img-responsive" src="img/galeria/galery-3.jpg"></div></li>

            <li data-target="#thumbnail-preview-indicators" data-slide-to="2"><div class="thumbnail"><img class="img-responsive" src="img/galeria/galery-4.jpg"></div></li>

            <li data-target="#thumbnail-preview-indicators" data-slide-to="3"></li>

        </ol>

        -----POR AQUIII-----------
        <div class="carousel-inner">

            <div class="item slides active"><div class="slide-1"></div><div class="container"><div class="carousel-caption"><h1>Chocolaterapia</h1><p>Tratamiento especial de carácter relajante y rejuvenecedor</p></div></div></div>

            <div class="item slides"><div class="slide-2"></div><div class="container"><div class="carousel-caption"><h1>Cosmética</h1><p>Lleva tu estilo y tendencia con nuestros productos más innovadores</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Productos cosmética</a></p></div></div></div>

            <div class="item slides"><div class="slide-3"></div><div class="container"><div class="carousel-caption"><h1>Ofertas y Descuentos</h1><p>Consigue ahora un 20% de descuento en tus sesiones de depilación y otros servicios</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Depilación</a></p></div></div></div>

            <div class="item slides"><div class="slide-4"></div><div class="container"><div class="carousel-caption"><h1>Tips & Consejos</h1><p>¿Te gusta estar informado de las últimas novedades en belleza y salud?. Observa las últimas publicaciones</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Belleza y Salud</a></p></div></div></div>

        </div>
          
     </div>

     */