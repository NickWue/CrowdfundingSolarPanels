<?php 
header('Access-Control-Allow-Origin: *'); 
$dblink = mysqli_connect("localhost","web635","Bananenbrot1","usr_web635_9");

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$gid = $_GET["gid"];
$name = $_GET["name"];
$type = $_GET["type"];
$describtion = $_GET["desribtion"];

$sql = "INSERT INTO users VALUES ('".$gid."','".$name."','".$type."','".$describtion."')";

$result = $dblink->query($sql);