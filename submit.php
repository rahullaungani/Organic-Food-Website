<?php 

    $conn = mysqli_connect('localhost','root','','food');
    if(!$conn){
        die("Database error");
    }
else echo <h1>"Message Submitted"</h1>;

$name = $_POST['name'];
$email = $_POST['email'];
$find-us = $_POST['find-us'];
$message = $_POST['message'];

echo $name;


?>