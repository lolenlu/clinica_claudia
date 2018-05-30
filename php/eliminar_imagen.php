<?php 
if (isset($_POST['img_bor'])) {
	$path="../img/galeria/".$_POST['img_bor'];
	unlink($path);
}

echo $_POST['img_bor'];
 ?>