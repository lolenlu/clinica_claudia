<?php

$ruta_carpeta="../img/galeria/";
$nombre_archivo="imagen_".date("dHis").".".pathinfo($_FILES["imagen"]["name"],PATHINFO_EXTENSION);
$ruta_guardar_archivo = $ruta_carpeta . $nombre_archivo;

if (move_uploaded_file($_FILES["imagen"]["tmp_name"],$ruta_guardar_archivo)) {
	
	echo $nombre_archivo;
}



  ?>