<?php
include 'config.php';
if($id!=''){
    $sql ="UPDATE `bills` SET `status_delivery`= 2 WHERE id_bill =".$_GET['id_bill']."";
    $db->statement($sql);

    http_response_code(200);
    $array = [
      "mess"=>"Thanh toán thành công",
    ];
    echo json_encode($array);
}

?>