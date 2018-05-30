/* SERVICIOS */
$("#servicios").click(function()
{

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

/*serv 1*/
      $("#serv_1").html("<div id='serv_11' class='portfolio-item'>"); 
      $("#serv_11").html("<div class='hover-bg' id='serv_111'>");
       $("#serv_111").html("<a href='img/galeria/galery-4.jpg' id='serv_1111' title='Depilacion' rel='prettyPhoto'>");
       $("#serv_1111").html("<div class='hover-text' id='serv_1_fin'>")
       .append("<img src='img/galeria/galery-4.jpg' class='img-responsive' alt='Project Title'>");
       $("#serv_1_fin").html("<h4>DEPILACION</h4><small>description....</small>");

/*serv 2*/
      $("#serv_2").html("<div id='serv_21' class='portfolio-item'>"); 
      $("#serv_21").html("<div class='hover-bg' id='serv_211'>");
       $("#serv_211").html("<a href='img/cuidado-corporal.jpg' id='serv_2111' title='Cuidado Corporal' rel='prettyPhoto'>");
       $("#serv_2111").html("<div class='hover-text' id='serv_2_fin'>")
       .append("<img src='img/cuidado-corporal.jpg' class='img-responsive' alt='Project Title'>");
       $("#serv_2_fin").html("<h4>CUIDADO CORPORAL</h4><small>description....</small>");

/*serv 3*/
      $("#serv_3").html("<div id='serv_31' class='portfolio-item'>"); 
      $("#serv_31").html("<div class='hover-bg' id='serv_311'>");
       $("#serv_311").html("<a href='img/galeria/galery-3.jpg' id='serv_3111' title='Cuidado Facial' rel='prettyPhoto'>");
       $("#serv_3111").html("<div class='hover-text' id='serv_3_fin'>")
       .append("<img src='img/galeria/galery-3.jpg' class='img-responsive' alt='Project Title'>");
       $("#serv_3_fin").html("<h4>CUIDADO FACIAL</h4><small>description....</small>");

/*serv 4*/
      $("#serv_4").html("<div id='serv_41' class='portfolio-item'>"); 
      $("#serv_41").html("<div class='hover-bg' id='serv_411'>");
       $("#serv_411").html("<a href='img/productos_cosmetica.jpg' id='serv_4111' title='Productos Cosmetica' rel='prettyPhoto'>");
       $("#serv_4111").html("<div class='hover-text' id='serv_4_fin'>")
       .append("<img src='img/productos_cosmetica.jpg' class='img-responsive' alt='Project Title'>");
       $("#serv_4_fin").html("<h4>PRODUCTOS COSMETICA</h4><small>description....</small>");
/*serv 5*/
      $("#serv_5").html("<div id='serv_51' class='portfolio-item'>"); 
      $("#serv_51").html("<div class='hover-bg' id='serv_511'>");
       $("#serv_511").html("<a href='img/manicura-pedicura.jpg' id='serv_5111' title='Manicura y Pedicura' rel='prettyPhoto'>");
       $("#serv_5111").html("<div class='hover-text' id='serv_5_fin'>")
       .append("<img src='img/manicura-pedicura.jpg' class='img-responsive' alt='Project Title'>");
       $("#serv_5_fin").html("<h4>MANICURA Y PEDICURA</h4><small>description....</small>"); 
/*serv 6*/
      $("#serv_6").html("<div id='serv_61' class='portfolio-item'>"); 
      $("#serv_61").html("<div class='hover-bg' id='serv_611'>");
       $("#serv_611").html("<a href='img/pest-cej.jpg' id='serv_6111' title='Pestañas y Cejas' rel='prettyPhoto'>");
       $("#serv_6111").html("<div class='hover-text' id='serv_6_fin'>")
       .append("<img src='img/pest-cej.jpg' class='img-responsive' alt='Project Title'>");
       $("#serv_6_fin").html("<h4>PESTAÑAS Y CEJAS</h4><small>description....</small>");                       

});