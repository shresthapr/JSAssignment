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
  document.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
})(window.jQuery);
