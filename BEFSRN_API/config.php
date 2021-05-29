<?php
header('Access-Control-Allow-Origin: http://localhost:19006/');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
include_once 'classes/database.php';
include_once 'classes/session.php';
header('Content-type: application/json');
$db = new database();
$id = '';
if(!isset($_COOKIE['auth'])){
    http_response_code(401);
    $array = [
      "mess"=>"Hãy đăng nhập",
    ];
    echo json_encode($array);
    $id='';
}else{
  $id=$_COOKIE['auth'];

}


 ?>