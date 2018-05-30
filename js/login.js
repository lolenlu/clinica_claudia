/* LOGIN */
    $("#login").click(function()
    {
      $("#cuerpo_prin").empty();
              
             

    $("#cuerpo_prin").html("<div class='container' id='contenedor_1'>");
    $("#contenedor_1").html("<div class='row main' id='contenedor_2'>");
    $("#contenedor_2").html("<div class='panel-heading' id='subcontenedor_1'>")
    .append("<div class='main-login main-center' id='subcontenedor_2'>");
    $("#subcontenedor_1").html("<div class='panel-title text-center' id='subcontenedor_11'>");
    $("#subcontenedor_11").html("<h2>ACCEDER</h2><hr/>");
    $("#subcontenedor_2").html("<form class='form-horizontal' name='login_pan' id='login_pan' method='post' action='php/login.php'>");
    $("#login_pan").html("<div id='info'></div>")
    .append("<div class='form-group' id='register_1'>")
    .append("<div class='form-group' id='register_3'>")
    .append("<div class='form-group' id='register_4'>")
    .append("<div class='form-group' id='register_6'>");

    
    $("#register_3").html("<div class='cols-sm-10' id='register_31'>");
    $("#register_31").html("<div class='input-group' id='register_311'>");
    $("#register_311").html("<span class='input-group-addon'><i class='fa fa-envelope fa' aria-hidden='true'></i></span><input type='text' class='form-control' name='email' id='email'  placeholder='Email' required/>");

    $("#register_4").html("<div class='cols-sm-10' id='register_41'>");
    $("#register_41").html("<div class='input-group' id='register_411'>");
    $("#register_411").html("<span class='input-group-addon'><i class='fa fa-lock fa-lg' aria-hidden='true'></i></span><input type='password' class='form-control' name='password' id='password'  placeholder='Contraseña' required/>");

    $("#register_6").html("<button type='submit' class='btn btn-primary btn-lg btn-block login-button'>Entrar</button>");

$('#login_pan').on("submit",function (e) {
        e.preventDefault();
        
        $.ajax({                        
           type: "POST",                 
           url: "php/login.php",                     
           data: $("#login_pan").serialize(),
           cache: false, 
           success: function(response)             
           {
             // Success message

             if(response == 0){ /* ERROR DE LOGEO*/
                    $('#info').html("<div class='alert alert-danger'>");
                    $('#info > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-danger').append("<strong>Datos incorrectos</strong>");
                    $('#info > .alert-danger').append('</div>');
                    
                }
                else{
                  var resp=JSON.parse(response);
             if (resp.num == 1) { /* EN CASO DE QUE SEAS UN USUARIO NORMAL O COMÚN*/
                    

                    

                    $("#cuerpo_prin").html("<div class='row' id='info_1'>");
                    $('#info_1').html("<div class='alert alert-success' id='info_suc'>");
                    $('#info_1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='javascript:inicio()'>&times;")
                        .append("</button>");
                    $('#info_1 > .alert-success')
                        .append("<strong>Acceso Correcto </strong>");
                    $('#info_1 > .alert-success')
                        .append('</div>');


                     /*borramos viejo*/
                     $("#register_1").remove();
                     $("#register_3").remove(); 
                     $("#register_4").remove(); 
                     $("#register_6").remove();  
                     
                     $("#registro").remove();
                     $("#login").remove();

                     /*añadir usuario
                     */

                     $("#panel").append("<li class='dropdown' id='log_cop'>");
                     $("#log_cop").html("<button class='btn btn-danger navbar-btn dropdown-toggle' data-toggle='dropdown' id='nom_usuario' value='"+resp.nombre_completo+"'>"+resp.nombre_completo+"</button>")
                     .append("<ul class='dropdown-menu' id='pan_user'><li><a id='ajustes_cuenta'>Ajustes</a></li><li class='divider'></li><li><a href='#' id='cierre_session'>Cerrar Sesión</a></li></ul>")

                     $("#cierre_session").on('click',function cerrar(){location.reload();});

                     /*AJUSTES DE LA CUENTA*/
                    $("#ajustes_cuenta").on('click',ajustes);

                    //clear all fields
                    $('#login_pan').trigger("reset");

                    
                }
                else/* EN CASO DE QUE SEAS UN USUARIO ADMINISTRADOR*/
                {

                   $("#cuerpo_prin").html("<div class='row' id='info_1'>");
                    $('#info_1').html("<div class='alert alert-success' id='info_suc'>");
                    $('#info_1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='javascript:inicio()'>&times;")
                        .append("</button>");
                    $('#info_1 > .alert-success')
                        .append("<strong>Acceso Correcto </strong>");
                    $('#info_1 > .alert-success')
                        .append('</div>');


                     /*borramos viejo*/
                     $("#register_1").remove();
                     $("#register_3").remove(); 
                     $("#register_4").remove(); 
                     $("#register_6").remove();  
                     
                     $("#registro").remove();
                     $("#login").remove();

                     /*añadir usuario
                     */

                     $("#panel").append("<li class='dropdown' id='log_cop'>");
                     $("#log_cop").html("<button class='btn btn-warning navbar-btn dropdown-toggle' data-toggle='dropdown' id='nom_usuario' value='"+resp.nombre_completo+"'>"+resp.nombre_completo+"</button>")
                     .append("<ul class='dropdown-menu' id='pan_user'><li><a href='#' id='gestion_gal'>Galeria</a></li><li class='divider'></li><li><a href='#' id='cierre_session'>Cerrar Sesión</a></li></ul>")

                     $("#cierre_session").on('click',function(){location.reload();});
                     $("#gestion_gal").on('click',gestion_galeria);

                } 
                }

                

           }
           
       
       });
        return false;
    });

    });

    /**/