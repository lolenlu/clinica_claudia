<?php

include_once "conexion.php";

    $sql1 = "SELECT descripcion,descripcion_2 FROM empresa";

    $res1 = $conexion->query($sql1);

    $variable = $res1->fetch_object();

    $array[1]=$variable->descripcion;
    $array[2]=$variable->descripcion_2;
   

    echo json_encode($array);

  ?>