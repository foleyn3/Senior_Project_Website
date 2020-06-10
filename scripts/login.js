function Show() {
  var censored = document.getElementById("paswd");
  if (censored.type === "password") {
    censored.type = "text";
  } 
  else {
    censored.type = "password";
  }
}
function Teacher(){
  window.open("homepage.html", "_self");
}

function Student(){
  window.open("homepage.html", "_self");
}

function ValidateCreate(){
  if(document.getElementById("psw").value != document.getElementById("psw2").value) {
    alert("Password does not match");
    return false;
  }
  else if(document.getElementById("email").value != document.getElementById("email2").value) {
    alert("Email does not match");
    return false;
  }
}