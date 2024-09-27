<?php


//declaring parameters
$host = "localhost";
$user = "root";
$pass = "";



try{
    $conn = new PDO("mysql:$host",$user,$pass);
    $sql = "Create database testing";
    $conn -> exec($sql);
    echo "Database is created";
} catch(Exception $e){
    echo "Database not created";
}





?>