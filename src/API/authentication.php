<?php      
     

    
$host = "localhost";  
$user = "root";  
$password = '';  
$db_name = "barter_db";  

$con = mysqli_connect($host, $user, $password, $db_name);  
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}  

$email = $_POST['email'];  
$password = $_POST['password'];       

$sql = "select * from user_detail where email = '$email' and password = '$password'";  
$result = mysqli_query($con, $sql);  
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
$count = mysqli_num_rows($result);            
if($count == 1){  
    // Pass user data as query parameters
    $ID = $row['ID'];
    $name = $row['name'];
    header('Location: http://localhost:3000/sell?ID=' . $ID . '&name=' . $name);
} else {  
    echo "<script>alert('Sorry, your Login Details were incorrect. Please double-check your Details.'); window.location.href='http://localhost:3000/login';</script>";           
}

?>  
  
