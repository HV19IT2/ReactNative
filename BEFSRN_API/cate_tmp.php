<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
include_once 'classes/database.php';
include_once 'classes/session.php';
$db = new database();
$ss = new session();
$ss->StartSession();

$cate = $db->getData("SELECT * from categories where status_cate = 0");
header('Content-Type: application/json');
echo json_encode($cate);
?>