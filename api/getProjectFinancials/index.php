<?php
header('Access-Control-Allow-Origin: *'); 
$dblink = mysqli_connect("localhost","web635","Bananenbrot1","usr_web635_9");

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


$country = $_GET['country']; 
$result = $dblink->query("SELECT * FROM countries WHERE id=".$country);

//Initialize array variable
$dbdata = array();


$np = 230; #norminal power

//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }

$costpm = $dbdata[0]["costforonemodule"];
$cfi = $dbdata[0]["costforinstalation"];
$sh= $dbdata[0]["sunnyhours"];
$flh= $dbdata[0]["proportionoffullloadhours"];
$pp= $dbdata[0]["electricityprice"];


$rooflenght = $_GET["rooflength"]; 
$roofwidth = $_GET["roofwidth"];
$currentangle = $_GET["currentangle"];

$l =1;                    #length of one solarcell
$w = 0.5;                 #width of one solarcell
$day = 95;
$lon = $dbdata[0]["lng"];
$de = -23.45 * cos(3.14/180*360*($day+10)/365);

$x = asin(sin($lon/180*3.14)* sin($de/180*3.14)+ cos($lon/180*3.14)* cos($de/180*3.14))/3.14*180;

$diff = $x-$currentangle;

echo '{';

echo '"idealangle":'.$x.',';
$aroof = $x;
/*
MAIN
*/


$d =($l* sin($diff* 3.14/180)*cos(($currentangle+$x)* 3.14/180))/sin(($x-$currentangle)* 3.14/180);
if($d > 0){
     echo '"distancebetweenmodules":'.floordec($d).',';
}
else{
    echo '"distancebetweenmodules":0,';
    $d = 0;
} 



$nrooflenght = floor($rooflenght/ ($l+$d));
if ((($rooflenght/ ($l+$d))-floor($rooflenght/ ($l+$d)))*$rooflenght >$l){
    $nrooflenght= $nrooflenght+1;
}

$nroofwidth = floor($roofwidth/ $w);

echo '"numbersolarcellslength": '.$nrooflenght.',';
echo '"nummersolarcellswidth": '.$nroofwidth.',';
$totalnofs = $nrooflenght * $nroofwidth;
echo '"totalnummersolarcells": '.$totalnofs;

$n = $totalnofs; #nummer of modules

function floordec($zahl,$decimals=2){    
     return floor($zahl*pow(10,$decimals))/pow(10,$decimals);
}



/*
calculation
*/
    
$cost = $n * $costpm +$cfi; #costs
$av = $sh * $np *$n * $flh /1000; #average output of the panels kWh
$sm = $av * $pp;

$ym = 100; #Yearly Maintanance in €
$of = 0.05; #Our Fee
$ir =0.5; #Investors Return
$ic = 0.05; #Insurance Cost
$ps =  ($sm -$ym) - $sm* (1-($of+$ir+$ic)); # Annual Power Savings for Landloard

echo ',"Country": "'.$dbdata[0]["countryname"].'",';
echo '"Cost": "'.$cost.'",';
echo '"kWhoutput": "'.$av.'",';
echo '"savedmoney": "'.$sm.'",';
echo '"annualpowersavings": "'.$ps.'",';

$ire =(10 * $ir *$sm)/$cost*100;

echo '"roi10yearsmoney": "'.(10 * $ir *$sm).'",';
echo '"roi10years": "'.$ire.'"';


echo '}';
?>







