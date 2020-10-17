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

  //notification popup
  var notif = document.getElementById("notification");
  window.onclick = function (event) {
    if (event.target === notif) {
      modal.style.display = "none";
    }
  };

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
