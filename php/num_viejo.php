<?php

include_once "conexion.php";

$nombre=$_POST['nombre_user'];

$sql="SELECT telefono as tel FROM usuarios WHERE nombre_completo='".$nombre."';";
$res=$conexion->query($sql);
$dat=$res->fetch_object();

echo json_encode($dat);
 ?>