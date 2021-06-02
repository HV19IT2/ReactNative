<?php
include 'config.php';
if($id!=''){
  $query = $db->getData("SELECT * FROM `bill_details` WHERE id_bill =".$_GET['id_bill']."");
  foreach( $query as $k => $v){
    $rs = $db->getRow("SELECT * FROM products WHERE id_prd = ".$v['id_prd']."");
    (int)$ud  = (int)$rs['amount_prd'] + (int)$v['amount_prd'] ;
    $db->statement("UPDATE `products` SET `amount_prd` = ".(int)$ud." WHERE id_prd = ".$v['id_prd']);
  }
  http_response_code(200);
  $sql ="DELETE FROM `bills` WHERE id_bill = ".$_GET['id_bill']."";
  $db->statement($sql);
    $array = [
      "mess"=>"Hủy đơn thành công",
    ];
    echo json_encode($array);
}


?>