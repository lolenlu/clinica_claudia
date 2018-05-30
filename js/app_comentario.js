var cont=10;
angular.module('app',[])
.controller('controlador',function($scope)
  {
    var newcoment={};
    var arrcoments=[];

    $scope.agregarComentario=function()
    {
    	/*console.log($scope.newcoment.comentario + $scope.newcoment.estre)/*tenemos las variables recogidas*/

      $.ajax({                        
           type: "POST",                 
           url: "php/agregar_comentarios.php",                     
           data: $("#formu_coment").serialize()+"&nom_user="+($("#nom_usuario").text())+"&fecha_com="+mostrarhora(),
           cache: false, 
           success: function(response)             
           {
            
            if (response == 0) {
              cont++;
              /*NUEVO COMENTARIO*/
  $("#comments-list").append("<li>")
  .append("<div class='comment-main-level' id='coment_"+$("#nom_usuario").text()+cont+"'>");
  $("#coment_"+$("#nom_usuario").text()+cont+"").html("<div class='comment-avatar'><img src='img/favicon.ico' alt=''>")
  .append("<div class='comment-box' id='coment_1"+$("#nom_usuario").text()+cont+"'>");
  $("#coment_1"+$("#nom_usuario").text()+cont+"").html("<div class='comment-head' id='coment_11"+$("#nom_usuario").text()+cont+"'>")
  .append("<div class='comment-content' id='comentario_publicacion_"+$("#nom_usuario").text()+cont+"'>"+$scope.newcoment.comentario+"</div>");
  $("#coment_11"+$("#nom_usuario").text()+cont+"").html("<h6 class='comment-name' id='nombre_publicacion_"+$("#nom_usuario").text()+cont+"'><a>"+$("#nom_usuario").text()+"</a></h6><span id='fecha_publicacion'>"+mostrarhora()+"</span>");
  for (var i = 0; i < $scope.newcoment.estre; i++) {
     $("#coment_11"+$("#nom_usuario").text()+cont+"").append("<i class='fa fa-star'></i>");
  };
      $('#formu_coment').trigger("reset"); 
          $('#info').html("<div class='alert alert-success'>");
                    $('#info > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-success').append("<strong> Comentario realizado correctamente</strong>");
                    $('#info > .alert-success').append('</div>');  

           }
            if(response == 1){
                    $('#info').html("<div class='alert alert-info'>");
                    $('#info > .alert-info').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-info').append("<strong> Accede para aportar una comentario a la comunidad</strong>");
                    $('#info > .alert-info').append('</div>');
                    $('#formu_coment').trigger("reset"); 
                }
         }
           
       
       });

    
    };
    
 


  });