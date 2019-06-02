<?php
  if(!empty($_POST['phoneNumber'])){
  /* Соединение с базой */
  $servername = "localhost";
  $database = "phonebook";
  $username = "admin";
  $password = "пароль";
  $conn = mysqli_connect($servername, $username, $password, $database);
   if (!$conn) {
         die("Connection failed: " . mysqli_connect_error());
         }

  echo "Connected successfully";

  /* Убираем HTML и PHP теги */
  $newElement = strip_tags($_POST['phoneNumber']);

  $done = mysql_query("INSERT INTO phone_numbers (phoneNumber) VALUES ('$newElement')");

  mysqli_close($conn);
}
?>
