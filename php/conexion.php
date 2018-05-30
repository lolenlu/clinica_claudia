<?php
$conexion = new mysqli("localhost", "root", "root");
if ($conexion) {
    $conexion->select_db("bd_claudia") or die("Base de Datos no encontrada");
}

  ?>