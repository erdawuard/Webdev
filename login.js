<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

function validate(){
    var username = document.getElementById("uName").value;
    var password = document.getElementById("pWord").value;
    if ( username == "Admin" && password == "Admin"){
        alert ("Login successfully");
        window.location = "admin.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("Wrong username/password");
    return false;
    }
    }

function validatee(){
    var username = document.getElementById("uName").value;
    var password = document.getElementById("pWord").value;
    if ( username == "Staff" && password == "Staff"){
        alert ("Login successfully")
        window.location = "staff.html";
        return false;
    }
    else{
        alert("Wrong username/password");
    return false;
    }
    }

function processDate(dob){
    var parts = date.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
    }
     
function calcAge(dob) {
    var dBirth = processDate(dob);
    var dToday = new Date();
    var diff = dToday.getTime() - dBirth.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
     
function validateDate(dob){
    var age = calcAge(dob);
    console.log(age);
    if(17<=age && age <=60) return true;
    else {
        alert("Invalid DOB");
        return false;
       }
     }

     $(document).ready(function(){
        $("button").click(function(){
          $("p").toggle();
        });
      });