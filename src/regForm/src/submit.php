<?php
 
header("Content-Type: application/json");
 
//Decodes json into php variable
$data = json_decode(file_get_contents("php://input"));
 
echo "Hello $data->name, your login is $data->login";

?>