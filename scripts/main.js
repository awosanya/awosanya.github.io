// document.querySelector('html').onload = alert('Welcome To My Personal Website...<br/>This is my Vision Beyond My Mission');


// DISPLAYING TEXT ON THE WEB PAGE
// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


// PRACTISING
// disCrep = document.getElementById("qouteAnimation");
// disCrep.innerHTML = "I Just get Started";
// disCrep.style.fontSize = "35px";
// disCrep.style.display = "block";

// TIME DISPLAYING
disPlayTime = document.getElementById("todaysTime");
disPlayTime.innerHTML = Date();

// CHANGING IMAGE
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/oladimeji1.jpg') {
      myImage.setAttribute ('src','images/oladimeji2.jpg');
    } else {
      myImage.setAttribute ('src','images/oladimeji1.jpg');
    }
}

// CUSTOMISES ERROR MESSAGE
var email = document.getElementById("soccerData");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  }
  else {
    email.setCustomValidity("");
  }
});