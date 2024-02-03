function checklogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (password == "admin123" && username == "admin") {
        alert("login succesfull");
        document.getElementById("loginForm").submit();
        return true;
    } else {
        alert("wrong username and password");
        return false;
    }
}