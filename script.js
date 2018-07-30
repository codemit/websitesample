var open = document.getElementById('login');
var displayLG = document.getElementById('loginBox');
var close = document.getElementById('loginOff');

// open = function(){
//   displayLG.style.display = "block";
//   console.log("the Log box is visible");
// };
//
// var close = function(){
//
//   open.style.display = "none";
//   console.log("Box is Closed");
// };

open.onclick = function(){
  displayLG.style.display = "block";

  close.style.display = "block";
  open.style.display = "none";
};

close.onclick = function(){
  displayLG.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
};

// code for search box
