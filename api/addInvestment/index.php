<?php 
header('Access-Control-Allow-Origin: *'); 
$dblink = mysqli_connect("localhost","web635","Bananenbrot1","usr_web635_9");

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$userid = $_GET["userid"];
$projectid = $_GET["projectid"];
$amount = $_GET["amount"];

$sql = "INSERT INTO investments VALUES ('".$userid."',".$projectid.",".$amount.",CURDATE())";
echo $sql;

$result = $dblink->query($sql);