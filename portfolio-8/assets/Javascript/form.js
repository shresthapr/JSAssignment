//Form Validation
var newName = document.getElementById("user_name");
var newEmail = document.getElementById("user_email");
var yourPassword = document.getElementById("password");
var passwordConfirm = document.getElementById("confirm-password");

function loginVerification(x) {
  x.preventDefault();
  console.log("Verifying.........");

  console.log("User Name: " + getUserName());
  console.log("User Email: " + getUserEmail());
  console.log("User Password: " + getUserPassword());
  console.log("Repeat password: " + getUserConfirmPassword());

  if (verifyName() && verifyPassword() && verifyEmail()) {
    return (
      (document.getElementById("id01").style.display = "none"),
      (document.getElementById("notification").style.display = "block"),
      window.open("http://127.0.0.1:5500/portfolio-8/myanimation.html", "_self")
    );
  }
}

//Get Name
function getUserName() {
  return $('[name="user_name"]').val();
}
//Verify Name
function verifyName() {
  var myName = getUserName();
  if (myName !== "" && myName.indexOf(" ") < 0) {
    return true;
  } else {
    document.getElementById("error1").innerHTML =
      "Name can not be empty use space!!";
  }
}
//Get Email
function getUserEmail() {
  return $('[name="user_email"]').val();
}

//Verify Email
function verifyEmail() {
  var myEmail = getUserEmail();
  if (myEmail === "" || myEmail.indexOf(" ") > -1) {
    document.getElementById("error2").innerHTML = "Input can not be empty!!!";
  }
  var atsymbol = myEmail.indexOf("@");
  var dotsymbol = myEmail.indexOf(".");
  if (
    atsymbol < 1 ||
    dotsymbol < atsymbol + 2 ||
    dotsymbol === myEmail.length - 1
  ) {
    document.getElementById("error2").innerHTML = "Input valid email!!! ";
  }
  return true;
}
//Get Password
function getUserPassword() {
  return $('[name="password"]').val();
}

function getUserConfirmPassword() {
  return $('[name="confirm-password"]').val();
}
//paaasword verification
function verifyPassword() {
  var myPassword = getUserPassword();
  var repeatPassword = getUserConfirmPassword();
  if (
    myPassword === repeatPassword &&
    myPassword.indexOf(" ") < 0 &&
    myPassword.length >= 2
  ) {
    return true;
  } else {
    document.getElementById("error3").innerHTML =
      "Password did not match. Space character not allowed!!! Min 8 Character !!! Try again!!!";
  }
}
