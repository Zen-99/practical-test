<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include './Config/Database.php';
include './Model/User.php';

$db=new Database;
$uri = $_SERVER['REQUEST_URI'];
echo $uri;
$reqArray=explode("/",$uri);



// if($reqArray[3]=="user"){
//     $user=new User;
//     if($reqArray[4]=="register"){
//         $data=file_get_contents("php://input");
//         $response=$user->register($data,$db);
//         echo $response;
//     }
// }
if($reqArray[3]=="user"){
    $user=new User;
     if($reqArray[4]=="login"){
        $data=file_get_contents("php://input");
        $response=$user->login($data,$db);
        echo $response;
    }
}

if($reqArray[3]=="user"){
    $user=new User;
    if($reqArray[4]=="loadDetails"){
        $data=file_get_contents("php://input");
        $response=$user->loadDetails($data);
        echo $response;
    }
}




?>