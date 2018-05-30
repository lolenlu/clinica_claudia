

  function gestion_galeria(){
    
 $.ajax({                        
           type: "GET",                 
           url: "php/num_fot.php", 
           success: function(obj)             
           {
            var fotos=JSON.parse(obj);

            
    $("#cuerpo_prin").empty();
    $("#cuerpo_prin").html("<div class='section-title center' id='galeria_adm'>");
    $("#galeria_adm").html("<h2>Gestión de Galería</h2><hr>");


    $("#cuerpo_prin").append("<button type='button' class='btn btn-warning btn-block col-sm-6 offset-sm-3' onclick='javascript:location.reload();'>Guardar cambios y salir</button>");
     $("#cuerpo_prin").append("<section class='main-slider' id='gal_cont' style='padding:0 !important; margin-top:150px;'>")
     .append("<form method='post' action='javascript:sub_imagen()' class='col-sm-12 offset-sm-6' id='frmSubirImagen' role='form' enctype='multipart/form-data' >");
     $("#gal_cont").html("<div id='myCarousel' class='carousel slide carousel-fade' data-ride='carousel'>");
     $("#myCarousel").html("<ol class='carousel-indicators'>")
      .append("<div class='carousel-inner'>")
      .append("<div class='control-box'>");
     
     for (var i = 0; i < fotos.length; i++) {
      if (i==0) {
          $(".carousel-indicators").html("<li data-target='#myCarousel' data-slide-to='0' id='li_in' class='active'></li>");
          $(".carousel-inner").html("<div id='div_in' class='item active'><img src='img/galeria/a.jpg' alt=''></div>");
  
          }
      else{
          $(".carousel-indicators").append("<li name='img/galeria/"+fotos[i]+"' data-target='#myCarousel' data-slide-to='"+i+"'></li>");
          $(".carousel-inner").append("<div class='item' name='img/galeria/"+fotos[i]+"'><img src='img/galeria/"+fotos[i]+"' alt=''><button onclick='javascript:borrar_imagen()' name='bot_borr' type='button' class='btn btn-danger btn-block' value='"+fotos[i]+"'>Eliminar</button></div>");
         }
}

$(".control-box").html("<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'><span class='control-icon prev fa fa-chevron-left' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>")
.append("<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'><span class='control-icon next fa fa-chevron-right' aria-hidden='true'></span><span class='sr-only'>Next</span></a>");

 $("#frmSubirImagen").append('<div class="form-group inputDnD"><input type="file" class="form-control-file text-info font-weight-bold" id="imagen" name="imagen" accept="image/*" onchange="javascript:readUrl(this)" data-title="Elegir imagen"></div><button type="submit" class="btn btn-info btn-block" id="sub_img" disabled>Añadir imagen a la Galería</button>');

           }
        });

      
}


          /*<button type="button" class="btn btn-warning btn-block col-sm-6 offset-sm-3" onclick="javascript:location.reload();">Guardar cambios y salir</button>

            <section class='main-slider' id='gal_cont' style='padding:0 !important; margin-top:150px;'>
               <div id='myCarousel' class='carousel slide carousel-fade' data-ride='carousel'>

                  <ol class='carousel-indicators'>
                    <li  data-target='#myCarousel' data-slide-to='0' class='active'></li>
                    <li name="img/galeria/galery-2.jpg" data-target='#myCarousel' data-slide-to='1'></li>
                  </ol>

                  <div class='carousel-inner'>

                    <div class='item active'><img src='img/galeria/a.jpg' alt=''></div>

                    <div class='item' name="img/galeria/galery-2.jpg">
                    <img src='img/galeria/galery-2.jpg' alt=''>
                    <button onclick="javascript:borrar_imagen()" name="bot_borr" type="button" class="btn btn-danger btn-block" value="galery-2.jpg">Eliminar</button>    
                    </div>
                      
                  </div>
                  <div class='control-box'>
                      <a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'><span class='control-icon prev fa fa-chevron-left' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>
                      <a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'><span class='control-icon next fa fa-chevron-right' aria-hidden='true'></span><span class='sr-only'>Next</span></a>
                  </div>
               </div>
            </section>

            <form class="col-sm-12 offset-sm-6" id="frmSubirImagen" role="form" enctype="multipart/form-data" >
                  
                    
                    <div class="form-group inputDnD"><input type="file" class="form-control-file text-info font-weight-bold" id="imagen" name="imagen" accept="image/*" onchange="readUrl(this)" data-title="Elegir imagen"></div><button type="submit" class="btn btn-info btn-block" id="sub_img" disabled>Añadir imagen a la Galería</button>
                  
            </form>*/  
              
