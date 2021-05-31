<?php
include 'config.php';
if($id!=''){
    $sql ="DELETE FROM `bills` WHERE id_bill = ".$_GET['id_bill']."";
    $db->statement($sql);

    http_response_code(200);
    $array = [
      "mess"=>"Hủy đơn thành công",
    ];
    echo json_encode($array);
}

?>