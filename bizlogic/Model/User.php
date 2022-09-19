<?php
session_start();
class User{
    public function login($requestBody,$db){
        $conn=$db->getConnection();
        $data=json_decode($requestBody);
        $userName=$data->username;
        $password=$data->password;

        $sql="SELECT passwrod from usertable where username=:username";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $userName);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);

        //converting the user's given password to hash should be here.
        
        if($users[0].['passwrod']=="$password"){
            $sql="SELECT id,name,username,email from usertable where username=:username";
            $stmt->bindParam(':username', $userName);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
            $_SESSION['username']=$users[0].['username'];
            $_SESSION['name']=$users[0].['name'];
            $_SESSION['email']=$users[0].['email'];
            $_SESSION['id']=$users[0].['id'];
            $response = 'successfull';
            return $response;
        }else{
            $response = 'incorrect';
        }
    }
    public function loadDetails($requestBody){
        $data=json_decode($requestBody);
        $userName=$data->username;
        if(isset( $_SESSION['username'] ) && $_SESSION['username']==$userName){
            $obj = (object) array('id'=>$_SESSION['id'],'username' => $_SESSION['username'], 'name' =>$_SESSION['name'],'email'=>$_SESSION['email'] );
            return $obj;
        }
    }
}

?>