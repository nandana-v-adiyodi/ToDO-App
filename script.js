function loginValidate(callback) {
    let userName = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    callback(userName,password);
} 
function validate(uname,pwd) {
        if (uname == "admin" && pwd == "12345") {
            alert("Login credentials are valid");
            
            document.querySelector("form").action = "./main.html";
        }
        else {
            alert("Invalid login");
        }
}

function onLogin() {
    loginValidate(validate);
} 
 

