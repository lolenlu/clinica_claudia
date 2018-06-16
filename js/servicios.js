/* SERVICIOS */


$("#servicios").click(function()
{


 $.ajax({                        
           type: "GET",                 
           url: "php/servicios.php?op=servicios", 
           success: function(obj)             
           {
            var servicios=JSON.parse(obj);
           

             $("#cuerpo_prin").empty();

$("#cuerpo_prin").html("<div id='portfolio'>");
$("#portfolio").html("<div class='container' id='cub_serv'>");
$("#cub_serv").html("<div class='section-title text-center center' id='cub_sec'>")
.append("<div class='row' id='cub_prin'>");
$("#cub_sec").html("<h2>SERVICIOS</h2><hr/>");
$("#cub_prin").html("<div class='portfolio-items' id='serv'>");
$("#serv").html("<div id='serv_1' class='col-sm-8 col-md-4 col-lg-4 web'>")
.append("<div id='serv_2' class='col-sm-8 col-md-4 col-lg-4 web'>")
.append("<div id='serv_3' class='col-sm-8 col-md-4 col-lg-4 web'>")
.append("<div id='serv_4' class='col-sm-8 col-md-4 col-lg-4 web'>")
.append("<div id='serv_5' class='col-sm-8 col-md-4 col-lg-4 web'>")
.append("<div id='serv_6' class='col-sm-8 col-md-4 col-lg-4 web'>");

/*serv 1 - AREA EPILACION*/
      $("#serv_1").html("<div id='serv_11' class='portfolio-item'>"); 
      $("#serv_11").html("<div class='hover-bg' id='serv_111'>");
       $("#serv_111").html("<a id='serv_1111' title='Depilacion' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_1111").html("<div class='hover-text' id='serv_1_fin'>")
       .append("<img src='"+servicios[0].ruta_imagen+"' class='img-responsive' alt='"+servicios[0].nombre+"'>");
       $("#serv_1_fin").html("<h4>"+servicios[0].nombre+"</h4>");


/*serv 2 - AREA CORPORAL*/
      $("#serv_2").html("<div id='serv_21' class='portfolio-item'>"); 
      $("#serv_21").html("<div class='hover-bg' id='serv_211'>");
       $("#serv_211").html("<a id='serv_2111' title='Cuidado Corporal' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_2111").html("<div class='hover-text' id='serv_2_fin'>")
       .append("<img src='"+servicios[1].ruta_imagen+"' class='img-responsive' alt='"+servicios[1].nombre+"'>");
       $("#serv_2_fin").html("<h4>"+servicios[1].nombre+"</h4>");

/*serv 3 - AREA FACIAL*/
      $("#serv_3").html("<div id='serv_31' class='portfolio-item'>"); 
      $("#serv_31").html("<div class='hover-bg' id='serv_311'>");
       $("#serv_311").html("<a id='serv_3111' title='Cuidado Facial' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_3111").html("<div class='hover-text' id='serv_3_fin'>")
       .append("<img src='"+servicios[2].ruta_imagen+"' class='img-responsive' alt='"+servicios[2].nombre+"'>");
       $("#serv_3_fin").html("<h4>"+servicios[2].nombre+"</h4>");

/*serv 4 - PRODUCTOS COSMETICA - TIENDA*//* ESTE TIENE QUE TENER UNA FUNCION DISTINTA!!******************/
      $("#serv_4").html("<div id='serv_41' class='portfolio-item'>"); 
      $("#serv_41").html("<div class='hover-bg' id='serv_411'>");
       $("#serv_411").html("<a id='serv_4111' title='Productos Cosmetica' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_4111").html("<div class='hover-text' id='serv_4_fin'>")
       .append("<img src='"+servicios[3].ruta_imagen+"' class='img-responsive' alt='"+servicios[3].nombre+"'>");
       $("#serv_4_fin").html("<h4>"+servicios[3].nombre+"</h4>");
/*serv 5 - MANICURA Y PEDICURA*/
      $("#serv_5").html("<div id='serv_51' class='portfolio-item'>"); 
      $("#serv_51").html("<div class='hover-bg' id='serv_511'>");
       $("#serv_511").html("<a id='serv_5111' title='Manicura y Pedicura' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_5111").html("<div class='hover-text' id='serv_5_fin'>")
       .append("<img src='"+servicios[4].ruta_imagen+"' class='img-responsive' alt='"+servicios[4].nombre+"'>");
       $("#serv_5_fin").html("<h4>"+servicios[4].nombre+"</h4>"); 
/*serv 6 - MAQUILLAJE*/
      $("#serv_6").html("<div id='serv_61' class='portfolio-item'>"); 
      $("#serv_61").html("<div class='hover-bg' id='serv_611'>");
       $("#serv_611").html("<a id='serv_6111' title='Maquillaje' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_6111").html("<div class='hover-text' id='serv_6_fin'>")
       .append("<img src='"+servicios[5].ruta_imagen+"' class='img-responsive' alt='"+servicios[5].nombre+"'>");
       $("#serv_6_fin").html("<h4>"+servicios[5].nombre+"</h4>");                       

           
           }
        });  

     

});


function servicios_concretos(elemento)
{
      


      var servicio_concreto=elemento.text;
      var ref_servicio_concreto=servicio_concreto.substring(0,2);

      $("#cuerpo_prin").empty();

      $("#cuerpo_prin").html("<div id='portfolio_"+ref_servicio_concreto+"'>");
$("#portfolio_"+ref_servicio_concreto+"").html("<div class='container' id='cub_serv_"+ref_servicio_concreto+"'>");
$("#cub_serv_"+ref_servicio_concreto+"").html("<div class='section-title text-center center' id='cub_sec_"+ref_servicio_concreto+"'>")
.append("<div class='row' id='cub_prin_"+ref_servicio_concreto+"'>");
$("#cub_sec_"+ref_servicio_concreto+"").html("<h2>"+servicio_concreto+"</h2><hr/>");
$("#cub_prin_"+ref_servicio_concreto+"").html("<div class='portfolio-items' id='serv_"+ref_servicio_concreto+"'>");

                  /*Vamos a recoger todos los datos de este servicio elegido para poder mostrarlo*/
      $.ajax({                        
           type: "GET",                 
           url: "php/servicios.php?op=servicios_concretos&nombre_area="+servicio_concreto, 
           success: function(obj)             
           {
            
            var data_servicios_concretos=JSON.parse(obj);
            

            for (var i = 0; i < data_servicios_concretos.length; i++) {
              if (servicio_concreto == "MANICURA Y PEDICURA" || servicio_concreto == "MAQUILLAJE") {
                $("#serv_"+ref_servicio_concreto).append("<div id='serv_"+ref_servicio_concreto+"_"+i+"' class='col-sm-10 col-md-6 col-lg-6 web'>");
              }
             
                  $("#serv_"+ref_servicio_concreto).append("<div id='serv_"+ref_servicio_concreto+"_"+i+"' class='col-sm-8 col-md-4 col-lg-4 web'>");
            }

            for (var i = 0; i < data_servicios_concretos.length; i++) {

              if (i==0) {/* CREAR FUNCION DISTINTA PARA EL AREA DE DEPILACION QUE PERMITA DIVIDIR EN PARTES CORPORALES LAS SESIONES*/
                  $("#serv_"+ref_servicio_concreto+"_"+i+"").html("<div id='serv_"+ref_servicio_concreto+"_"+i+"1' class='portfolio-item'>"); 
      $("#serv_"+ref_servicio_concreto+"_"+i+"1").html("<div class='hover-bg' id='serv_"+ref_servicio_concreto+"_"+i+"11'>");
       $("#serv_"+ref_servicio_concreto+"_"+i+"11").html("<a id='serv_"+ref_servicio_concreto+"_"+i+"111' title='"+data_servicios_concretos[i].nombre+"' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_"+ref_servicio_concreto+"_"+i+"111").html("<div class='hover-text' id='serv_"+ref_servicio_concreto+"_"+i+"_fin'>")
       .append("<img src='"+data_servicios_concretos[i].ruta_imagen+"' class='img-responsive' alt='"+data_servicios_concretos[i].nombre+"'>");
       $("#serv_"+ref_servicio_concreto+"_"+i+"_fin").html("<h4>"+data_servicios_concretos[i].nombre+"</h4><small>"+data_servicios_concretos[i].descripcion+"</small>");
           
              }

            $("#serv_"+ref_servicio_concreto+"_"+i+"").html("<div id='serv_"+ref_servicio_concreto+"_"+i+"1' class='portfolio-item'>"); 
      $("#serv_"+ref_servicio_concreto+"_"+i+"1").html("<div class='hover-bg' id='serv_"+ref_servicio_concreto+"_"+i+"11'>");
       $("#serv_"+ref_servicio_concreto+"_"+i+"11").html("<a id='serv_"+ref_servicio_concreto+"_"+i+"111' title='"+data_servicios_concretos[i].nombre+"' rel='prettyPhoto' onclick='servicios_concretos(this)'>");
       $("#serv_"+ref_servicio_concreto+"_"+i+"111").html("<div class='hover-text' id='serv_"+ref_servicio_concreto+"_"+i+"_fin'>")
       .append("<img src='"+data_servicios_concretos[i].ruta_imagen+"' class='img-responsive' alt='"+data_servicios_concretos[i].nombre+"'>");
       $("#serv_"+ref_servicio_concreto+"_"+i+"_fin").html("<h4>"+data_servicios_concretos[i].nombre+"</h4><small>"+data_servicios_concretos[i].descripcion+"</small>");
            }
            /*SIGUIENTE PASO CREAR FUNCION PARA CADA SERVICIO CONCRETO, AGREGARLA EN EL CLICK***********************/
            /*INTRODUCIR LA CHOCOLATERAPIA DENTRO DE AREA CORPORAL?*/
           }



            });


};