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