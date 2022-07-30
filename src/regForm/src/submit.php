<?php
 
header("Content-Type: application/json");
 
//Decodes json into php variable
$data = json_decode(file_get_contents("php://input"));
echo "<div>
        <p></p>
        <p>Hello $data->name, your registration for $data->projectName has been sent</p>
        <p></p>
     </div>";
// echo " ";

?>