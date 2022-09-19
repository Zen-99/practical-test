<?php

class Database{
	
	private $host  = 'localhost';
    private $user  = 'root';
    private $password   = "";
    private $database  = "practical"; 
    
    public function getConnection(){		
        try {
            $conn = new PDO('mysql:host=' .$this->host .';dbname=' . $this->database, $this->user, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
?>