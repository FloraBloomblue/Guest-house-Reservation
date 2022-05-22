<?php
if (isset($_POST['submit'])) { //check submit button
    if (isset($_POST['firstName']) && isset($_POST['lastName']) &&
        isset($_POST['emailid']) && isset($_POST['govtid']) &&
        isset($_POST['govtidnum']) && isset($_POST['arrivaldate']) &&
        isset($_POST['departuredate']) && isset($_POST['countryname']) &&
        isset($_POST['people']) && isset($_POST['textarea']) &&
        isset($_POST['payment'])) { //check input fields
    
     //variable inintializing
    $firstName= $_POST['firstName'];
    $lastName= $_POST['lastName'];
    $emailid= $_POST['emailid'];
    $govtid= $_POST['govtid'];
    $govtidnum= $_POST['govtidnum'];
    $arrivaldate= $_POST['arrivaldate'];
    $departuredate= $_POST['departuredate'];
    $countryname= $_POST['countryname'];
    $people= $_POST['people'];
    $textarea= $_POST['textarea'];
    $payment= $_POST['payment'];

    //check for empty fields
    if(!empty($firstName) || !empty($lastName) ||!empty($emailid) ||!empty($govtid) ||!empty($govtidnum) ||!empty($arrivaldate) ||!empty($departuredate) ||!empty($countryname) ||!empty($people) ||!empty($textarea) ||!empty($payment)){
        
        //add host, username, password and database names
        $host= "localhost";
        $dbUsername="root";
        $dbPassword="";
        $dbName="guest house";

        //create connection
        $conn= new mysqli($host, $dbUsername, $dbPassword, $dbName);
       
        //check if connection is not okay show error or go to else part
        if ($conn->connect_error) {
           die("Connection failed: " . $conn->connect_error);
        }
        else{
            //sql queries
            $SELECT= "SELECT emailid FROM ghr WHERE emailid = ? LIMIT 1";
            $INSERT="INSERT INTO ghr(firstName, lastName, emailid, govtid, govtidnum, arrivaldate, departuredate, countryname, people, textarea, payment) values (?,?,?,?,?,?,?,?,?,?,?) ";

            //prepare statement
            $stmt=$conn->prepare($SELECT);
            $stmt->bind_param("s",$emailid); //s here is string, and ? in line:26 replaces'$email'
            $stmt->execute();
            $stmt->bind_result($emailid);
            $stmt->store_result();
            $stmt->fetch();
            $rnum=$stmt->num_rows; 

            if($rnum==0){ //check empty table
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("ssssssssiss",$firstName, $lastName, $emailid, $govtid, $govtidnum, $arrivaldate, $departuredate, $countryname, $people, $textarea, $payment);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                    }
                else {
                    echo $stmt->error;
                    echo "error";
                    }
             }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
  }
}
else {
    echo "Submit button is not set";
}
?>