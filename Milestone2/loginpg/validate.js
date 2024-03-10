function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.querySelector('.toggle-password');
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.043 1.865a.5.5 0 0 1 .428-.228c.326-.01.63.175.824.471l7.557 10.5a.5.5 0 0 1-.066.66l-1.4 1.285a.5.5 0 0 1-.66.066l-7.558-10.5a.5.5 0 0 1-.066-.66l1.4-1.285a.5.5 0 0 1 .232-.204zm-.917 2.174l.544.756a3 3 0 0 0-.433 1.377l-.13.752-.89-.622.13-.752a1 1 0 0 1 .144-.459l.44-.607zm2.223 9.048a2.5 2.5 0 0 1-2.994-1.698l1.086.759a1.5 1.5 0 0 0 1.808.004l1.086-.76a2.5 2.5 0 0 1-1.986 1.695z"/></svg>';
    } else {
      passwordField.type = "password";
      toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a12 12 0 0 0-8 8c1.775 3.53 4.307 6 8 6s6.225-2.47 8-6a12 12 0 0 0-8-8zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>';
    }
  }
  
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Check if provided email and password match the specified credentials
    if (email === "shubham@gmail.com" && password === "34fhYu@j*") {
      // If credentials match, route to register.html
      window.location.href = "../Hotel/home.html";
      return false; 
    } 
    else {
      alert("Incorrect email or password. Please try again.");
      return false; 
    }
  }
  