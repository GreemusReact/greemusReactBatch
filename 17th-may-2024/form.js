document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var alertMessage =
      "Name: " + name + "\nEmail: " + email + "\npassword: " + pwd;
    alert(alertMessage);
  });
