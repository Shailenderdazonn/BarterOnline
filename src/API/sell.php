<?php

// Retrieve form data
$title = $_POST["title"];
$price = $_POST["price"];
$description = $_POST["description"];
$category = $_POST["category"];
$location = $_POST["location"];
$file = $_FILES["file"];

// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "barter_db");

// Set the file path
$filePath = "img/" . time() . "_" . $file["name"];

// Move the uploaded file to the specified folder
move_uploaded_file($file["tmp_name"], $filePath);
$sql = "INSERT INTO user_ads (title, price, description, category, location) VALUES ('$title', '$price', '$description', '$category', '$location' )";
mysqli_query($conn, $sql); 

// Update the MySQL table with the file path
$sql = "UPDATE user_ads SET file='$filePath' WHERE id=LAST_INSERT_ID()";
mysqli_query($conn, $sql);

echo json_encode(array("success" => true));

?>

