function Show() {
  var censored = document.getElementById("paswd");
  if (censored.type === "password") {
    censored.type = "text";
  } 
  else {
    censored.type = "password";
  }
}