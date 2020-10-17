(function ($) {
  // Mobile Responsive Dropdown
  const mobilemenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.toggle("mobilemenu");
    document.getElementsByClassName(".Tryme").style.visibility = "hidden";
  };

  //popup

  var modal = document.getElementById("id01");

  //close popup when clicked anywhere outside modal div
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

 
  var form = document.getElementsByClassName("messageForm");

  form.addEventListener("submit", function(k){
    let errormessage = [];
    var atScore = yourEmail.indexOf('@');
    if (yourEmail.value ==
  })

  // LOG in information validation

  function validateEmail(){
    var _email = getEmail();

    if (checkSpace(_email) === true) {
        return false;
    }

    // check for @
    var atSymbol = _email.indexOf('@');
    if(atSymbol < 1) {
        return false;
    }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf('.');
  if(dot <= atSymbol + 2) {
      return false;
  } 

  // check that the dot is not at the end
  if (dot === _email.length - 1){
      return false;
  } 

  return true;
  }
  // const name = document.getElementById("name");
  // const password = document.getElementById("password");
  // const form = document.getElementById("form");
  // const errorElement = document.getElementById("error");

  // form.addEventListener("submit", (e) => {
  //   let messages = [];
  //   if (name.value === "" || name.value == null) {
  //     messages.push("Name is required");
  //   }

  //   if (password.value.length <= 6) {
  //     messages.push("Password must be longer than 6 characters");
  //   }

  //   if (password.value.length >= 20) {
  //     messages.push("Password must be less than 20 characters");
  //   }

  //   if (password.value === "password") {
  //     messages.push("Password cannot be password");
  //   }

  //   if (messages.length > 0) {
  //     e.preventDefault();
  //     errorElement.innerText = messages.join(", ");
  //   }
  // }); */
})(window.jQuery);
