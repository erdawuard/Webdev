$('#startpage, #adstudent').on(
     'click',
     function(){
         $('#startpage, .adstudent').toggle()
     }
 )
 loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Admin" && password === "Admin") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "Staff" && password === "Staff") {
        alert("You have successfully logged in.")
    } else{
        loginErrorMsg.style.opacity = 1;
    }    
    }
)