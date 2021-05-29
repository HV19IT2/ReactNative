<?php

header('Access-Control-Allow-Origin: http://localhost:19006/'); 

header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
header("Access-Control-Allow-Credentials: true");
include_once 'classes/database.php';
include_once 'classes/session.php';
$db = new database();
$ss = new session();
$ss->StartSession();
header('Content-type: application/json');
$httpProtocol = !isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] != 'on' ? 'http' : 'https';
$base = $httpProtocol.'://'.$_SERVER['HTTP_HOST']."/".'FlowerShop/';

$username=$password="";

$data = json_decode(file_get_contents("php://input"),true);

$username = $data["data"]["username"];
$password = $data["data"]["password"];
if(empty($username) || empty($password)){
    if ($username=='') {
         http_response_code(401);
         $array = [
           "mess"=>"Tài khoản không được để trống",
         ];
      }
  else if($password==''){
        http_response_code(401);
        $array = [
          "mess"=>"Mật khẩu không được để trống",
        ];
    } 
}
  else {
           if($db->numrow("SELECT * from accounts where username='".$username."' and password='".md5($password)."'"))
          {
            $data = $db->getRow("SELECT * from accounts where username='".$username."'");
              setcookie("auth",$data['id_user'] , time() + 3600*7, "/");
              http_response_code(200);
              header('Content-type: application/json');
              $array = [
                "mess"=>"Đăng nhập thành công",
                "username"=>$data["username"],
                "id_user"=>$data["id_user"],
                "role"=>$data["role"],
              ];
          }else{
            http_response_code(401);
            $array = [
              "mess"=>"Tài khoản hoặc mật khẩu không chính xác",
            ];
          }
        }
    echo json_encode($array);

?>