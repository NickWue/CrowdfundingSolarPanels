<?php 
header('Access-Control-Allow-Origin: *'); 
$dblink = mysqli_connect("localhost","web635","Bananenbrot1","usr_web635_9");

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$userid = $_GET["userid"];

$result = $dblink->query("SELECT * FROM investments LEFT JOIN projects ON investments.projectid = projects.id
WHERE investments.userid = '".$userid."'");


//Initialize array variable
$dbdata = array();



//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
      $row["yearspassed"] = (strtotime(date("Y-m-d"))-strtotime($row["start_datum"]))/60/60/24/30/12;
      $row["returnsofarpercent"] = ($row["yearspassed"] == 0?0:$row["expectedannualreturn"] /  $row["yearspassed"]);
      $row["returnsofarmoney"] = $row["amount"] * ($row["returnsofarpercent"] / 100);
      $dbdata[]=$row;
  }


//Print array in JSON format
echo json_encode($dbdata);
