<?php

	
$name = $_POST['nombre_cl'];
$email = $_POST['email'];
$message = $_POST['message'];

/*echo ($name.$email.$message);*/
	
// Create the email and send the message
$to = 'lorenzojose_96@hotmail.es'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = $name;
$email_body = "Has recibido un nuevo mensaje de tu formulario de contactos de la web.\n\n"."Estos son los detalles:\n\nNombre:".$name."\n\nEmail:".$email."\n\nMensaje:\n".$message;


mail($email,$email_subject,$email_body);
mail($to,$email_subject,$email_body);
			
?>