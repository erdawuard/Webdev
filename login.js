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
        window.location = "http://127.0.0.1:5500/admin.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "Staff" && password === "Staff") {
        alert("You have successfully logged in.");
        window.location = "http://127.0.0.1:5500/staff.html"
    } else{
        loginErrorMsg.style.opacity = 1;
    }    
    }
)
function toggleAdStudent() {
    var adStudent = document.getElementById('adstudent');
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }
