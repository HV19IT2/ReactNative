<?php 
include 'config.php';
if($id!=''){
	$data = json_decode(file_get_contents("php://input"),true);
// echo json_encode((int)$data);
$id_prd = (int)$data;
$id_user = $id;
$getiduser="SELECT * FROM carts WHERE id_user = ".$id_user."";
$haveid= $db->getRow($getiduser);
$slqtyprd="SELECT amount_prd from products where id_prd =".$id_prd."";
$qtyav = $db->getRow($slqtyprd);
if(!isset($haveid['id_user']))
	{
		$sql="INSERT INTO `carts`(`id_user`) VALUES (".$id_user.")";
		$db->statement($sql);
		$last_id_cart= $db->last_id();
		if((int)$qtyav["amount_prd"] > 0){
			$ins_cartdt = "INSERT INTO `cart_details`(`id_cart`, `id_prd`, `prd_qty`) VALUES (".$last_id_cart.",".$id_prd.",'1')";
		    $db->statement($ins_cartdt);
		}else{
			http_response_code(404);
			$array = [
				"mess"=>"Hết hàng",
			  ];
			  echo json_encode($array);
		}
		
	}
else
	{	
		if((int)$qtyav['amount_prd'] > 0){
			$slprd="SELECT * FROM cart_details where id_prd=".$id_prd." AND id_cart=".$haveid['id_cart']."";
			$haveidprd=$db->getRow($slprd);
			if(isset($haveidprd['prd_qty'])){
				$sl = $haveidprd['prd_qty'];
			}
			if(isset($haveidprd['id_prd'])){
				$sl += 1;
				$update = "UPDATE `cart_details` 
						SET `prd_qty`=".$sl." 
						WHERE `id_cartdt`=".$haveidprd['id_cartdt']."";
				$db->statement($update);
			}else{
				$ins_cartdt = "INSERT INTO `cart_details`(`id_cart`, `id_prd`, `prd_qty`) VALUES (".$haveid['id_cart'].",".$id_prd.",'1')";
				$db->statement($ins_cartdt);
			}
		}else{
			http_response_code(404);
			$array = [
				"mess"=>"Hết hàng",
			  ];
			  echo json_encode($array);
		}
		
	}
}

?> 
