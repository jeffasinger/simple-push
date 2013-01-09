<?php
#We'll broadcast whatever message is passed as a GET parameter to the node server

if (isset($_GET['msg'])) {

     #Create a new request with CURL
     $ch = curl_init(); 
     $data = array('msg' => $_GET['msg']);
     curl_setopt($ch, CURLOPT_URL, 'http://localhost/notify');
     curl_setopt($ch, CURLOPT_PORT, 3000);
     curl_setopt($ch, CURLOPT_POST, 1);
     curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
     
     #Execute the request	
     curl_exec($ch);
}

?>
