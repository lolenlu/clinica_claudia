/* OPINION */

  $("#opinion").click(function(){

 
 
    $("#cuerpo_prin").empty();

     /*AGREGAR COMENTARIO*/
    $("#cuerpo_prin").html("<form name='formu_coment' id='formu_coment' class='card_comment col-md-8 col-md-offset-2' ng-submit='agregarComentario()'>");
    $(".card_comment").html("<div id='info'></div>")
    .append("<textarea maxlength='200' id='comentario_text' name='comentario_text' placeholder='Agrega un comentario' ng-model='newcoment.comentario' style='width:600px; height:100px; color:black;'' required>")
    .append("<div class='stars'>")
    .append("<button type='submit' class='btn btn-success green'><i class='fa fa-share'></i> Comentar</button>");
    $(".stars").html("<input type='radio' name='star' ng-model='newcoment.estre' class='star-1' id='star-1' value='1' required/>")
    .append("<label class='star-1' for='star-1'>1</label>")
    .append("<input type='radio' name='star' ng-model='newcoment.estre' class='star-2' id='star-2' value='2'/>")
    .append("<label class='star-2' for='star-2'>2</label>")
    .append("<input type='radio' name='star' ng-model='newcoment.estre' class='star-3' id='star-3' value='3'/>")
    .append("<label class='star-3' for='star-3'>3</label>")
    .append("<input type='radio' name='star' ng-model='newcoment.estre' class='star-4' id='star-4' value='4'/>")
    .append("<label class='star-4' for='star-4'>4</label>")
    .append("<input type='radio' ng-model='newcoment.estre' name='star' class='star-5' id='star-5' value='5'/>")
    .append("<label class='star-5' for='star-5'>5</label>")
    .append("<span></span>");
    $('#formu_coment').trigger("reset"); 

    /* COMENTARIOS REALIZADOS -- ESTRUCTURA */

  $("#cuerpo_prin").append("<div class='comments-container'>");
  $(".comments-container").html("<br><h2 style='margin-top:200px;'>Comentarios</h2><hr/>")
  .append("<ul id='comments-list' class='comments-list'>");

   
        $.ajax({                        
           type: "GET",                 
           url: "php/comentarios.php", 
           success: function(obj)             
           {
            var json=JSON.parse(obj);
             

             for (var i = 0; i < json.length; i++) {
               
             
             /*COMENTARIOS EN BD*/
            $("#comments-list").append("<li>")
            .append("<div class='comment-main-level' id='coment_"+i+"'>");
            $("#coment_"+i+"").html("<div class='comment-avatar'><img src='img/favicon.ico' alt=''>")
            .append("<div class='comment-box' id='coment_1"+i+"'>");
            $("#coment_1"+i+"").html("<div class='comment-head' id='coment_11"+i+"'>")
            .append("<div class='comment-content' id='comentario_publicacion_"+i+"'>"+json[i].coment+"</div>");
            $("#coment_11"+i+"").html("<h6 class='comment-name' id='nombre_publicacion_"+i+"'><a>"+json[i].nombre+"</a></h6><span id='fecha_publicacion'>"+json[i].fecha+"</span>");
      var aux= parseInt(json[i].estre);
      for (var z = 0; z < aux; z++) {
            $("#coment_11"+i+"").append("<i class='fa fa-star'></i>");
                  }
                }
           }
      
         });
        
   


  
compilador_angular();
    
  });