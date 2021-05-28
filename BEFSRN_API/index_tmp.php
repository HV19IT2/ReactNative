<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
include_once 'classes/database.php';
include_once 'classes/session.php';
$db = new database();
$ss = new session();
$ss->StartSession();
?>
                <?php
                   if(isset($_GET['id_prd']))
                   require_once 'product_detail_tmp.php';
                   else
                  { 
                    if(isset($_GET['id_cate'])){
                    require_once 'index_cate_tmp.php';     
                   }else{
                    require_once 'products_tmp.php';
                   }
                  }
                  
                ?>