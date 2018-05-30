<?php
		include_once "conexion.php";

		$sql="SELECT u.nombre_completo as nombre,c.estrellas as estre,c.comentario as coment, c.fecha_comentario as fecha FROM COMENTARIOS C, USUARIOS U WHERE c.id_usuario = u.id;";

		$res=$conexion->query($sql);
		$arr_comen=array();

		for ($i=0; $i < $res->num_rows; $i++) { 
			

			$arr_comen[$i]=$res->fetch_object();/**/
			

		}

		echo json_encode($arr_comen);

  ?>