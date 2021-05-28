<?php 
include 'config.php';
$data = json_decode(file_get_contents("php://input"),true);
echo json_encode($data);
$noidung =$data['data']['cmt_dt'];
$id_prd = $data['id'];
$id_user = $id;
$vote =$data['vote'];
$sql ="INSERT INTO comments (`id_prd`, `id_user`, `detail_cmt`, `vote_prd`) VALUES ($id_prd, $id_user, '$noidung', $vote)";
$db -> statement($sql);
 ?>
