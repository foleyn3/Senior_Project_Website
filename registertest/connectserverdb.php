<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'seniorproj-db.cqiexl3pxle4.us-east-2.rds.amazonaws.com');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'password22');
define('DB_NAME', 'registration');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
// echo "Connected";

$query = "select * from courses";
$result = mysqli_query($link, $query);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}


echo json_encode($data);

$link->close();
?>