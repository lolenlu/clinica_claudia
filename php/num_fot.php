<?php

$directorio = opendir("../img/galeria"); //ruta actual
$i=0;
while ($archivo = readdir($directorio)) //obtenemos un archivo y luego otro sucesivamente
{
	
	$arr[$i]=$archivo;  
    $i++;
}

unset($arr[0]);
unset($arr[1]);


echo json_encode(array_values($arr));

  ?>