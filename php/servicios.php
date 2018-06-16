<?php 

include_once "conexion.php";

$opcion=$_GET['op'];

if ($opcion=="servicios") {
	

$sql="SELECT nombre, ruta_imagen FROM servicios";
$res=$conexion->query($sql);
$i=0;

for ($i=0; $i < $res->num_rows; $i++) { 
	$arr_servicios[$i]=$res->fetch_object();
}	


echo json_encode($arr_servicios);
}

if ($opcion=="servicios_concretos") {

$area=$_GET['nombre_area'];

$sql_sub="SELECT id FROM servicios WHERE nombre='".$area."'";

$res=$conexion->query($sql_sub);

$obj=$res->fetch_object();



$sql="SELECT * FROM servicios_concretos WHERE id_area='".$obj->id."'";

$res1=$conexion->query($sql);
$i=0;

while ($res1->num_rows > $i) {
	$arr_servicios_concretos[$i]=$res1->fetch_object();
	$i++;
}


echo json_encode($arr_servicios_concretos);
}

 ?>