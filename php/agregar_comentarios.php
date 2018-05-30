<?php 

include_once "conexion.php";

$comment = $_POST['comentario_text'];
$star = $_POST['star'];



if (isset($_POST['nom_user']) && $_POST['nom_user'] != '') {
	$nom_user=$_POST['nom_user'];
	$fech=$_POST['fecha_com'];

	$sql0="SELECT id FROM usuarios WHERE nombre_completo='".$nom_user."'";
	$res0=$conexion->query($sql0);
	
		$id_user=$res0->fetch_object();


	$sql="INSERT INTO comentarios VALUES (null,'".$id_user->id."','".$star."','".$comment."','".$fech."');";
	$res=$conexion->query($sql);
	
		echo 0;
	
}
else{echo 1;}


 ?>