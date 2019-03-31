<?php 
header('Access-Control-Allow-Origin: *'); 
$dblink = mysqli_connect("localhost","web635","Bananenbrot1","usr_web635_9");

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$name = $_GET["name"];
$street = $_GET["street"];
$city = $_GET["city"];
$countryID = $_GET["countryID"];
$dimX = $_GET["dimX"];
$dimY = $_GET["dimY"];
$userid = $_GET["userid"];
$funding_required = $_GET["funding_required"];
$funding_received = $_GET["funding_received"];
$expectedreturn = $_GET["expectedreturn"];


$sql = "INSERT INTO projects VALUES (DEFAULT,'".$name."','".$street."','".$city."','".$countryID."','".$dimX."','".$dimY."','".$userid."',0,'".$funding_required."','".$funding_received."',CURDATE(),".$expectedreturn.")";
echo $sql;

$result = $dblink->query($sql);