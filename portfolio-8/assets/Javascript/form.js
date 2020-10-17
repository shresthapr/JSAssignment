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
  console.log("Repeat Password: " + getUserConfirmPassword());

  if (verifyName()) {
    return console.log("password verified");
  }
  $("id01").empty();
  document.modal.reset();
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
    myPassword.length >= 7
  ) {
    return true;
  } else {
    document.getElementById("error3").innerHTML =
      "Password did not match. Space character not allowed!!! Min 8 Character !!! Try again!!!";
  }
}
