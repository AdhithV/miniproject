<?php

@include 'config.php';
if(isset($_POST['submit']))

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register form</title>

        <!--custom css file link-->
<link rel="stylesheet" href="css/style.css">

</head>
<body>
    <div class="form-container">
    <form action="" method="post">
        <h3>register now</h3>
       <input type="text" name="name" required placeholder="enter your name"> 
       <input type="email" name="email" required placeholder="enter your email"> 
       <input type="password" name="password" required placeholder="enter your password">
       <input type="password" name="password" required placeholder="confirm your password">
        <select name="user_type">
          <option value="user">user</option>
          <option value="user">admin</option>
        </select>
    <input type="submit" name="submit" value="register now" class="form-btn">
    <p>already have an account? <a href="login_form.php">login now</a></p>
    </form>
    </div>
    
</body>
</html>