/* NOSOTROS */

  $("#nosotros").click(function(){

 
 
    $("#cuerpo_prin").empty();

   

      $("#cuerpo_prin").html("<div class='section-title center' id='nos_1'>")
          .append("<div class='row' id='principal'>");
          $("#nos_1").html("<h2>Nosotros</h2><hr>")

    $(".row").html("<div class='col-xs-12 col-md-6' id='primero'>")
    $("#primero").html("<img src='img/about.png' class='img-responsive' alt=''>")
    .append("</div>");

    $("#principal").append("<div class='col-xs-12 col-md-6' id='segundo'>");
    $("#segundo").html("<div class='about-text' id='tercero'>");

     $.get("php/about.php",function(info)
    {
      var data=JSON.parse(info);
      /*CARD + INFO BD*/

$("#tercero").html("<div class='center-contents' id='carta_prin'>") 
    .append("<p>"+data[1])
    .append(data[2]+"</p>")
    .append("<a href='#portfolio' class='btn btn-primary btn-lg page-scroll'>Novedades</a>");

     $("#carta_prin").html("<div class='card center-contents' id='carta_hij'>").css({
      marginTop: '20px',
      marginLeft: '155px'
    });
      $("#carta_hij").html("<div class='profile center-contents' id='componente_1'>")
      .append("<div class='info' id='componente_2'>");
      $("#componente_1").html("<div class='pic'></div>");
      $("#componente_2").html("<div class='title' id='esteticista'>")
      .append("<div class='sub-title' id='formacion'>");
       $("#esteticista").html("<span>CLAUDIA</span><br/>MONTEAGUDO CATALÁN");
       $("#formacion").html("TÉCNICO SUPERIOR EN ESTÉTICA INTEGRAL Y BIENESTAR");
    } );



    
  });