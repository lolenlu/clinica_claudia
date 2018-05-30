<?php 

include_once "conexion.php";


$email = $_POST['email'];
$pass = $_POST['password'];

$sql="SELECT nombre_completo FROM usuarios WHERE email = '".$email."' AND pass='".$pass."' AND tipo_user ='USER'";

$res=$conexion->query($sql);
if ($res->num_rows == 1) {
	$compl=$res->fetch_object();
	$compl->num=1;

	echo json_encode($compl);
}
else
{
	$sql_2="SELECT nombre_completo FROM usuarios WHERE email = '".$email."' AND pass='".$pass."' AND tipo_user ='ADMIN'";

$res_2=$conexion->query($sql_2);
if ($res_2->num_rows != 1) {
	echo 0;
	}
else{
	$compl_2=$res_2->fetch_object();
	$compl_2->num=2;

	echo json_encode($compl_2);
	}
}
	


 ?>