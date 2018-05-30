/* GALERIA */

 $.ajax({                        
           type: "GET",                 
           url: "php/num_fot.php", 
           success: function(obj)             
           {
           	fotos_a=JSON.parse(obj);
           }
        });

  $("#galeria").click(function(){
    $("#cuerpo_prin").empty();
    $("#cuerpo_prin").html("<div class='section-title center' id='galeriac'>");
    $("#galeriac").html("<h2>Galería</h2><hr>");
    

$("#cuerpo_prin").append("<section class='main-slider' id='gal_cont' style='padding:0 !important;'>");
$("#gal_cont").html("<div id='myCarousel' class='carousel slide carousel-fade' data-ride='carousel'>");
$("#myCarousel").html("<ol class='carousel-indicators'>")
.append("<div class='carousel-inner'>")
.append("<div class='control-box'>");

for (var i = 0; i < fotos_a.length; i++) {
if (i==0) {
	$(".carousel-indicators").html("<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");
	$(".carousel-inner").html("<div class='item active'><img src='img/galeria/"+fotos_a[i]+"' alt=''></div>");
}
else{
$(".carousel-indicators").append("<li data-target='#myCarousel' data-slide-to='"+i+"'></li>");
$(".carousel-inner").append("<div class='item'><img src='img/galeria/"+fotos_a[i]+"' alt=''></div>");
	}
}

$(".control-box").html("<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'><span class='control-icon prev fa fa-chevron-left' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>")
.append("<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'><span class='control-icon next fa fa-chevron-right' aria-hidden='true'></span><span class='sr-only'>Next</span></a>");



});
