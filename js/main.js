
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
  });

function compilador_angular()
{
  $("#cuerpo_prin").each(function () {
    var content = $(this);
    angular.element(document).injector().invoke(function($compile) {
        var scope = angular.element(content).scope();
        $compile(content)(scope);
    });
  });
}

function mostrarhora(){ 
var f=new Date();
cad=f.getDate()+" - "+(f.getMonth()+1)+" - "+f.getFullYear()+" // "+f.getHours()+":"+f.getMinutes(); 
return cad;

}

function inicio() {
            
           
        $("#cuerpo_prin").empty();
              
             

    $("#cuerpo_prin").html("<div class='row' id='main_1'>");
    $("#main_1").html("<div class='intro-text' id='main_11'>");
    $("#main_11").html("<img id='imagen-principal' src='img/logo.png'>");


        }

function readUrl(input) {
  
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
      $("#sub_img").attr("disabled", false);
      
    }
    reader.readAsDataURL(input.files[0]);
  }

}


  function sub_imagen(){
   
      

      var frmData = new FormData;
      frmData.append('imagen',$("input[name=imagen]")[0].files[0]);

      $.ajax({
        url: "php/subir_imagen.php",
        type: "POST",
        data: frmData,
        processData: false,
        contentType: false,
        cache: false,
        success:function(data)
        {
          
            alert(data+" se ha subido correctamente.");
            
            document.getElementById("imagen").setAttribute("data-title", "Arrastra imagen");
            $(".carousel-indicators").append("<li name='"+data+"' data-target='#myCarousel'></li>");
            $(".carousel-inner").append("<div class='item' name='"+data+"'><img src='img/galeria/"+data+"' alt=''><button onclick='javascript:borrar_imagen()' name='bot_borr' type='button' class='btn btn-danger btn-block' value='"+data+"'>Eliminar</button></div>");
            $(".carousel-indicators li").attr('class','');
            $(".carousel-inner div").attr('class','item');
            $("li[name='"+data+"']").attr('class','active');   
            $("div[name='"+data+"']").attr('class','item active');
            $("#sub_img").attr("disabled", true);
            $("#frmSubirImagen").trigger("reset");
          

        },
        error:function()
        {
          alert("Parece que hubo un error al subir la imagen");
        }

      });
      return false;    
  };



  function borrar_imagen(){
   

      var data_el=$("div [class='item active'] button").val();

      $.ajax({
        url: "php/eliminar_imagen.php",
        type: "POST",
        data: { "img_bor" : data_el },
        cache: false,
        success:function(data)
        {
            
            alert(data+" se ha eliminado correctamente.");
            $(".carousel-indicators li").attr('class','');
            $(".carousel-inner div").attr('class','item');
            $("li [name='img/galeria/"+data_el+"']").remove();
            $("div [name='img/galeria/"+data_el+"']").remove();
            $("#li_in").attr('class','active');
            $("#div_in").attr('class','item active');
            
            

        }

      });
      return false;    
  }



(function () {
   'use strict';
	
	// COLAPSAR MENU

  $(".navbar-nav li").click(function (event) {
    // CHECKEA SI LA VENTANA ES SUFICIENTEMENETE PEQUEÑA PARA COLAPSAR MENU
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  


  

})();

