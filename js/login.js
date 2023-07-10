function func() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "ug@2023") {
    location.href = "https://ashiqee.github.io/ug-admission-2023/home.html";
    alert("login succesfully");
  } else {
    alert("login fail !");
    return false;
    // location.assign("index.html");
  }
}
