/* REGISTRO */

    $("#registro").click(function()
    {
      $("#cuerpo_prin").empty();
              
             

    $("#cuerpo_prin").html("<div class='container' id='contenedor_1'>");
    $("#contenedor_1").html("<div class='row main' id='contenedor_2'>");
    $("#contenedor_2").html("<div class='panel-heading' id='subcontenedor_1'>")
    .append("<div class='main-login main-center' id='subcontenedor_2'>");
    $("#subcontenedor_1").html("<div class='panel-title text-center' id='subcontenedor_11'>");
    $("#subcontenedor_11").html("<h2>REGISTRO</h2><hr/>");
    $("#subcontenedor_2").html("<form class='form-horizontal' name='register' id='register' method='post' action='php/registro.php'>");
    $("#register").html("<div id='info'></div>")
    .append("<div class='form-group' id='register_1'>")
    .append("<div class='form-group' id='register_12'>")
    .append("<div class='form-group' id='register_2'>")
    .append("<div class='form-group' id='register_3'>")
    .append("<div class='form-group' id='register_4'>")
    .append("<div class='form-group' id='register_5'>")
    .append("<div class='form-group' id='register_6'>");
    $("#register_1").html("<div class='cols-sm-10' id='register_11'>");
    $("#register_11").html("<div class='input-group' id='register_111'>");
    $("#register_111").html("<span class='input-group-addon'><i class='fa fa-user fa' aria-hidden='true'></i></span><input type='text' class='form-control' name='name' id='name'  placeholder='Nombre' required/>");

    $("#register_12").html("<div class='cols-sm-10' id='register_112'>");
    $("#register_112").html("<div class='input-group' id='register_1112'>");
    $("#register_1112").html("<span class='input-group-addon'><i class='fa fa-user fa' aria-hidden='true'></i></span><input type='text' class='form-control' name='ape' id='ape'  placeholder='Apellidos' required/>");

    $("#register_2").html("<div class='cols-sm-10' id='register_21'>");
    $("#register_21").html("<div class='input-group' id='register_211'>");
    $("#register_211").html("<span class='input-group-addon'><i class='fa fa-phone' aria-hidden='true'></i></span><input type='text' class='form-control' name='tel' id='tel' maxlength='9' placeholder='Teléfono' required/>");

    $("#register_3").html("<div class='cols-sm-10' id='register_31'>");
    $("#register_31").html("<div class='input-group' id='register_311'>");
    $("#register_311").html("<span class='input-group-addon'><i class='fa fa-envelope fa' aria-hidden='true'></i></span><input type='email' class='form-control' name='email' id='email'  placeholder='Email' required/>");

    $("#register_4").html("<div class='cols-sm-10' id='register_41'>");
    $("#register_41").html("<div class='input-group' id='register_411'>");
    $("#register_411").html("<span class='input-group-addon'><i class='fa fa-lock fa-lg' aria-hidden='true'></i></span><input type='password' class='form-control' name='pass' id='pass'  placeholder='Contraseña' required/>");

    $("#register_5").html("<div class='cols-sm-10' id='register_51'>");
    $("#register_51").html("<div class='input-group' id='register_511'>");
    $("#register_511").html("<span class='input-group-addon'><i class='fa fa-lock fa-lg' aria-hidden='true'></i></span><input type='password' class='form-control' name='pass_confirm' id='pass_confirm'  placeholder='Confirmar Contraseña' required/>");

    $("#register_6").html("<button type='submit' class='btn btn-primary btn-lg btn-block login-button'>Registrar</button>");


      $('#register').on("submit",function (e) {
        e.preventDefault();
        var url = "php/registro.php";
        $.ajax({                        
           type: "POST",                 
           url: url,                     
           data: $("#register").serialize(),
           cache: false, 
           success: function(response)             
           {
             // Success message
             if (response == 0) {
                    $('#info').html("<div class='alert alert-success'>");
                    $('#info > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-success')
                        .append("<strong>Has realizado la inscripción correctamente </strong>");
                    $('#info > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#register').trigger("reset"); 
                } 
                if(response == 1){
                    $('#info').html("<div class='alert alert-danger'>");
                    $('#info > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-danger').append("<strong>Lo siento, las contraseñas no coinciden entre sí</strong>");
                    $('#info > .alert-danger').append('</div>');
                    
                }

                if(response == 2){
                    $('#info').html("<div class='alert alert-danger'>");
                    $('#info > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-danger').append("<strong>Este nombre ya ha sido registrado</strong>");
                    $('#info > .alert-danger').append('</div>');
                    
                }
                 if(response == 3){
                    $('#info').html("<div class='alert alert-danger'>");
                    $('#info > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#info > .alert-danger').append("<strong>Este email ya ha sido registrado</strong>");
                    $('#info > .alert-danger').append('</div>');
                    
                }


           }
           
       
       });
        return false;
    });
    });
