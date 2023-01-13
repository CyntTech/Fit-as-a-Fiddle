<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $phone = $_POST['phone'];
    $Gender = $_POST['Gender'];
    $Country = $_POST['Country'];
    $State = $_POST['State'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $ConfirmPassword = $_POST['Confirm Password'];

    //Database connection
    $conn = new mysqli('localhost','root','','fitness');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(firstname, lastname, phone, gender, country, state, email, password, confirmPassword)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissssss",$firstname, $lastname, $phone, $gender, $country, $state, $email, $password, $confirmPassword);
        $stmt->execute();
        echo "Registration Successful..";
        $stmt->close();
        $conn->close();
        
        }
    
    ?>    
