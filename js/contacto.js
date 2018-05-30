  /* CONTACTO */


        $("#contacto").click(function()
        {
          $("#cuerpo_prin").empty();
          $("#cuerpo_prin").html("<div class='section-title center' id='contac_1'>")
          .append("<div class='col-md-8 col-md-offset-2' id='contac_2'>");
          $("#contac_1").html("<h2>Contáctanos</h2><hr>")
            /*COLLAPSE PANEL DIRECCION

          */
          .append("<div id='mas_info'>");
          $("#mas_info").html("<button id='mas_info_button' class='btn btn-default' type='button' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>")
          .append("<div class='collapse' id='collapseExample'>");
          $("#mas_info_button").html("INFORMACIÓN COMPLETA");
          $("#collapseExample").html("<div id='direccion_completa_hij' class='card card-body'>");
          $("#collapseExample").html("<div class='col-md-8 col-md-offset-2' id='contenido_direcc'>");
          $("#contenido_direcc").html("<p>MADRIGUERAS (ALBACETE) , 02230<br/>CAMINO SAN JORGE , 10<br/>653 322 945</p>")
          .css({
            color: 'black',
            marginBottom: '15px'
          });
          



          $("#contac_2").html("<form name='contactForm' id='contactForm' method='post' action='php/contact_me.php'>");
          $("#contactForm").html("<div class='row' id='contac_3'>")
          .append("<div class='form-group' id='contac_body'>")
          .append("<div id='success'></div>")
          .append("<button type='submit' id='envia' class='btn btn-default'>Send Message</button>");
          $("#contac_3").html("<div class='col-md-6' id='contac_4'>")
          .append("<div class='col-md-6' id='contac_33'>");
          $("#contac_4").html("<div class='form-group' id='contac_5'>");
          $("#contac_5").html("<input type='text' name='nombre_cl' id='nombre_cl' class='form-control' placeholder='Name' required/>")
          .append("<p class='help-block text-danger'></p>");

          
          $("#contac_33").html("<div class='form-group' id='contac_7'>");
          $("#contac_7").html("<input type='email' id='email' name='email' class='form-control' placeholder='Email' required/>")
          .append("<p class='help-block text-danger'></p>");

          $("#contac_body").html("<textarea name='message' id='message' class='form-control' rows='4' placeholder='Message' required></textarea>")
          .append("<p class='help-block text-danger'></p>");

          $('#contactForm').on("submit",function (e) {
        e.preventDefault();
        var url = "php/contact_me.php";
        $.ajax({                        
           type: "POST",                 
           url: url,                     
           data: $("#contactForm").serialize(),
           cache: false, 
           success: function()             
           {
             // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset"); 

           },
           error: function()
           {
            // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
           }
       
       });
        return false;
    });




        });