<?php
if(isset($_GET['room_number'])){
    $room_number = $_GET['room_number'];}
 if(isset($_GET['bulding'])){
        $bulding = $_GET['bulding'];}
 if(isset($_GET['capacity'])){
            $capacity = $_GET['capacity'];}
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
if(!empty($room_number) && !empty($bulding) && !empty($capacity )){
 $quere =' SELECT * FROM classroom where room_number = '.$room_number;
 $result = $conn->query($quere);
 $studentsArray = array();
 while($row = mysqli_fetch_assoc($result)){
  $studentsArray[] =$row;
}
if(sizeof($studentsArray)==0){
$sql = "INSERT INTO classroom VALUES ('$bulding', '$room_number', '$capacity')";
$res = mysqli_query($conn,$sql);
          if($res){
            print " insert complite";
          }
        }
        else 
        print " duplicated primary key ";      
}
else
print " input uncomplite ";
$conn->close();
?>