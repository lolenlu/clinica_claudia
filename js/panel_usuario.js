 
function ajustes(){

                        $("#cuerpo_prin").empty();

                        $("#cuerpo_prin").html("<div id='portfolio'>");


                        $("#portfolio").html("<div class='container' id='cub_serv'>");
                        $("#cub_serv").html("<div class='section-title text-center center' id='cub_sec'>")
                        .append("<div class='row' id='cub_prin'>");
                        $("#cub_sec").html("<h2>AJUSTES</h2><hr/>");
                        $("#cub_prin").html("<div class='portfolio-items' id='serv'>");
                        $("#serv").html("<div id='serv_1' class='col-sm-10 col-md-6 col-lg-6 web'>")
                        .append("<div id='serv_2' class='col-sm-10 col-md-6 col-lg-6 web'>");

                        /*CAMBIO DE CONTRASEÑA*/
                              $("#serv_1").html("<div id='serv_11' class='portfolio-item'>"); 
                              $("#serv_11").html("<div class='hover-bg' id='serv_111'>");
                               $("#serv_111").html("<a onclick='javascript:cambio_contra()' id='serv_pass' title='Cambio de contraseña' rel='prettyPhoto'>");
                               $("#serv_pass").html("<div class='hover-text' id='serv_1_fin'>")
                               .append("<img src='img/change_pass.jpg' class='img-responsive' alt='Cambio de contraseña'>");
                               $("#serv_1_fin").html("<h4>CLAVE DE ACCESO</h4><small>Realizar un cambio en la clave de acceso a su cuenta </small>");

                        /*CAMBIO DE TELEFONO*/
                              $("#serv_2").html("<div id='serv_21' class='portfolio-item'>"); 
                              $("#serv_21").html("<div class='hover-bg' id='serv_211'>");
                               $("#serv_211").html("<a onclick='javascript:cambio_tel()' id='serv_tel' title='Cambio de telefono' rel='prettyPhoto'>");
                               $("#serv_tel").html("<div class='hover-text' id='serv_2_fin'>")
                               .append("<img src='img/telefono.jpg' class='img-responsive' alt='Cambio de telefono'>");
                               $("#serv_2_fin").html("<h4>TELEFONO</h4><small>Cambio de su número de telefono</small>");


                    }


 function cambio_tel()
 {
 	$.ajax({                        
           type: "POST",                 
           url: "php/num_viejo.php",                     
           data: {nombre_user:$("#nom_usuario").text()},
           cache: false, 
           success: function(response)             
           {
           	var respuesta=JSON.parse(response);
           	

 	$("#cuerpo_prin").empty();

 	$("#cuerpo_prin").html("<div class='container' id='contenedor_1'>");
    $("#contenedor_1").html("<div class='row main' id='contenedor_2'>");
    $("#contenedor_2").html("<div class='panel-heading' id='subcontenedor_1'>")
    .append("<div class='main-login main-center' id='subcontenedor_2'>");
    $("#subcontenedor_1").html("<div class='panel-title text-center' id='subcontenedor_11'>");
    $("#subcontenedor_11").html("<h2>CAMBIO DE TELEFONO</h2><hr/>");
    $("#subcontenedor_2").html("<form class='form-horizontal' name='camb_tel' id='camb_tel' method='post' action='php/camb_tel.php'>");
    $("#camb_tel").html("<div id='info'></div>")
    .append("<div class='form-group' id='register_1'>")
    .append("<div class='form-group' id='register_3'>")
    .append("<hr style='width:100%;'/>")
    .append("<div class='form-group' id='register_4'>")
    .append("<div class='form-group' id='register_6'>");

    
    $("#register_3").html("<div class='cols-sm-10' id='register_31'>");
    $("#register_31").html("<div class='input-group' id='register_311'>");
    $("#register_311").html("<span class='input-group-addon'><i class='fas fa-phone-slash' aria-hidden='true'></i></span><input type='text' class='form-control' name='tel_anti' id='tel_anti' value='"+respuesta.tel+"' readonly/>");

    $("#register_4").html("<div class='cols-sm-10' id='register_41'>");
    $("#register_41").html("<div class='input-group' id='register_411'>");
    $("#register_411").html("<span class='input-group-addon'><i class='fa fa-phone' aria-hidden='true'></i></span><input type='text' class='form-control' name='tel_new' id='tel_new'  placeholder='Nuevo Telefono' maxlength='9' minlength='9' required/>");

    $("#register_6").html("<button type='submit' class='btn btn-primary btn-lg btn-block login-button'>Cambiar</button>");

    $('#camb_tel').on("submit",function (e) {
        e.preventDefault();
         $.ajax({                        
           type: "POST",                 
           url: "php/cambio_num.php",                     
           data: $("#camb_tel").serialize()+"&nombre="+$("#nom_usuario").text(),
           cache: false, 
           success: function()             
           {
           	$("#cuerpo_prin").html("<div class='row' id='info_1'>");
                    $('#info_1').html("<div class='alert alert-success' id='info_suc'>");
                    $('#info_1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='javascript:inicio()'>&times;")
                        .append("</button>");
                    $('#info_1 > .alert-success')
                        .append("<strong>Numero modificado correctamente </strong>");
                    $('#info_1 > .alert-success')
                        .append('</div>');

           }
       });
	});

       }
   });

 }

 function cambio_contra()
 {

 
           	

 	$("#cuerpo_prin").empty();

 	$("#cuerpo_prin").html("<div class='container' id='contenedor_1'>");
    $("#contenedor_1").html("<div class='row main' id='contenedor_2'>");
    $("#contenedor_2").html("<div class='panel-heading' id='subcontenedor_1'>")
    .append("<div class='main-login main-center' id='subcontenedor_2'>");
    $("#subcontenedor_1").html("<div class='panel-title text-center' id='subcontenedor_11'>");
    $("#subcontenedor_11").html("<h2>CAMBIO DE CLAVE</h2><hr/>");
    $("#subcontenedor_2").html("<form class='form-horizontal' name='camb_pass' id='camb_pass' method='post' action='php/camb_pass.php'>");
    $("#camb_pass").html("<div id='info'></div>")
    .append("<div class='form-group' id='register_1'>")
    .append("<div class='form-group' id='register_3'>")
    .append("<hr style='width:100%;'/>")
    .append("<div class='form-group' id='register_4'>")
    .append("<div class='form-group' id='register_5'>")
    .append("<div class='form-group' id='register_6'>");

    
    $("#register_3").html("<div class='cols-sm-10' id='register_31'>");
    $("#register_31").html("<div class='input-group' id='register_311'>");
    $("#register_311").html("<span class='input-group-addon'><i class='fa fa-lock fa-lg' aria-hidden='true'></i></span><input type='text' class='form-control' name='pass_anti' id='pass_anti' placeholder='Antigua Contraseña'/>");

    $("#register_4").html("<div class='cols-sm-10' id='register_41'>");
    $("#register_41").html("<div class='input-group' id='register_411'>");
    $("#register_411").html("<span class='input-group-addon'><i class='fa fa-lock fa-lg' aria-hidden='true'></i></span><input type='password' class='form-control' name='pass_new_1' id='pass_new_1'  placeholder='Nueva Contraseña'/>");

    $("#register_5").html("<div class='cols-sm-10' id='register_51'>");
    $("#register_51").html("<div class='input-group' id='register_511'>");
    $("#register_511").html("<span class='input-group-addon'><i class='fa fa-lock fa-lg' aria-hidden='true'></i></span><input type='password' class='form-control' name='pass_new_2' id='pass_new_2' placeholder='Repita Nueva Contraseña'/>");


    $("#register_6").html("<button type='submit' class='btn btn-primary btn-lg btn-block login-button'>Cambiar</button>");

    $('#camb_pass').on("submit",function (e) {
        e.preventDefault();
         $.ajax({                        
           type: "POST",                 
           url: "php/camb_pass.php",                     
           data: $("#camb_pass").serialize()+"&nombre="+$("#nom_usuario").text(),
           cache: false, 
           success: function(response)             
           {
           	 if (response == 0) {
           	$("#cuerpo_prin").html("<div class='row' id='info_1'>");
                    $('#info_1').html("<div class='alert alert-success' id='info_suc'>");
                    $('#info_1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='javascript:inicio()'>&times;")
                        .append("</button>");
                    $('#info_1 > .alert-success')
                        .append("<strong>Contraseña modificada correctamente </strong>");
                    $('#info_1 > .alert-success')
                        .append('</div>');
                    }
             if(response == 1){
                    $('#info').html("<div class='alert alert-danger'>");
                    $('#info > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-danger').append("<strong>Las nuevas contraseñas no coinciden entre sí</strong>");
                    $('#info > .alert-danger').append('</div>');
                    
                }
             if(response == 2){
                    $('#info').html("<div class='alert alert-danger'>");
                    $('#info > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-danger').append("<strong>Las antigua contraseñas no es correcta</strong>");
                    $('#info > .alert-danger').append('</div>');
                    
                }



           }
       });
	});

      

 }