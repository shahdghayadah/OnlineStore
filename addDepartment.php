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
if(!empty($dept_name) && !empty($buliding) && !empty($budget )){
  $quere =" SELECT * FROM department where dept_name = '".$dept_name."'";
 $result = $conn->query($quere);
 $studentsArray = array();
 while($row = mysqli_fetch_assoc($result)){
  $studentsArray[] =$row;
}
if(sizeof($studentsArray)==0){
$sql = "INSERT INTO department VALUES ('$dept_name', '$buliding', '$budget')";
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