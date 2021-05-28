<?php
if($_GET['id_cate']==0){
    $sql="SELECT * from products 
    where status_prd = 0 ";
}else{
     $parentCate = $db->getRow("SELECT id_parentcate from categories where id_cate = ".$_GET['id_cate']."");
    
    if($parentCate['id_parentcate']==0)
    {
    
        foreach($db->getData("SELECT id_cate from categories where id_parentcate = ".$_GET['id_cate']."") as $key=>$value)
        {  
            if(isset($value['id_cate']))
            $item[]=$value['id_cate'];    
        }
        
        if(isset($item))   
        {    
            $str=implode(",",$item);   
            
            $sqllm = "SELECT count(id_prd) as total from products 
                    where status_prd = 0 
                    and id_cate in (".$str.",".$_GET['id_cate'].")";
        }else
        {   
            
            $sqllm = "SELECT count(id_prd) as total from products 
                    where status_prd = 0 
                    and id_cate = ".$_GET['id_cate']."";
        }
    }else
        {
            
            $sqllm = "SELECT count(id_prd) as total from products 
                    where status_prd = 0 and id_cate = ".$_GET['id_cate']."";
        }
    $row = $db->getRow($sqllm);
    
    if($row['total']!=0)
    {$total_records = $row['total'];
    $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
    if(isset($_GET['limit'])){
        $ss->savelimit($_GET['limit']);  
    }
    if(isset($_SESSION['limit'])){
        $limit = $_SESSION['limit'];
    }else{
        $limit=9;
    }
    $total_page = ceil($total_records / $limit);
    if ($current_page > $total_page)
        {
            $current_page = $total_page;
        }
    else if ($current_page < 1)
        {
            $current_page = 1;
        }
    $start = ((int)$current_page - 1) * $limit;
    }else{
        $start =NULL;
        $limit = NULL;
    }
    
    if($parentCate['id_parentcate']==0)
    {
        
        if(isset($item))   
        {    
            $str=implode(",",$item);
            if(isset($start)&&isset($limit))   
            {$sql="SELECT * from products 
            where status_prd = 0 
            and id_cate in (".$str.",".$_GET['id_cate'].")
            LIMIT $start, $limit";}
            else{$sql="SELECT * from products 
                where status_prd = 0 
                and id_cate in (".$str.",".$_GET['id_cate'].")";
                }
            
        }else
        {   if(isset($start)&&isset($limit))
            {$sql="SELECT * from products 
            where status_prd = 0 
            and id_cate = ".$_GET['id_cate']."
            LIMIT $start, $limit ";}
            else{$sql="SELECT * from products 
                where status_prd = 0 
                and id_cate = ".$_GET['id_cate']."";
                }
            
        }
    }else
        { if(isset($start)&&isset($limit))
            {$sql="SELECT * from products 
            where status_prd = 0 
            and id_cate = ".$_GET['id_cate']."
            LIMIT $start, $limit ";}
            else
            {
                $sql="SELECT * from products 
                where status_prd = 0 
                and id_cate = ".$_GET['id_cate']."";
                
            }
            
        }
}
   
        header('Content-Type: application/json');
        echo json_encode($db->getData($sql));
?>     