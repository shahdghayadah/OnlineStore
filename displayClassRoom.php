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
$a = 'SELECT * FROM classroom ';
$result = $conn->query($a);
$studentsArray = array();
while($row = mysqli_fetch_assoc($result)){
   $studentsArray[] =$row;
}
echo json_encode($studentsArray);

$conn->close();
?>