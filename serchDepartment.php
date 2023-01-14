<?php
if(isset($_GET['dept_name'])){
    $dept_name = $_GET['dept_name'];}
 if(isset($_GET['buliding'])){
        $buliding = $_GET['buliding'];}
 if(isset($_GET['budget'])){
            $budget = $_GET['budget'];}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lab7";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$a = 'SELECT * FROM department where';
if(!empty($dept_name)){
    $a .= " dept_name = '".$dept_name."' AND";

}
if( !empty($bulding) ){
    $a .= " buliding = '".$buliding."' AND";

}
if(!empty($budget )){
    $a .= " budget = ".$budget." AND";
}


    $a = substr($a, 0, strrpos($a, " "));



$result = $conn->query($a);
$studentsArray = array();
while($row = mysqli_fetch_assoc($result)){
   $studentsArray[] =$row;
}
echo json_encode($studentsArray);
         


$conn->close();
?>