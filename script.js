var modal = document.getElementById("myModal");
var btn = document.getElementById("login-btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
              modal.style.display = "block";
            };
span.onclick = function () {
              modal.style.display = "none";
            };
window.onclick = function (event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            };
var modal1 = document.getElementById("myModal2");
var btn1 = document.getElementById("signin-btn");
var span1 = document.getElementsByClassName("close")[1];
btn1.onclick = function () {
              modal1.style.display = "block";
            };
span1.onclick = function () {
              modal1.style.display = "none";
            };
window.onclick = function (event) {
              if (event.target == modal1) {
                modal1.style.display = "none";
              }
            };