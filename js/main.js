
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

