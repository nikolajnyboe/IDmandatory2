console.log("HELLO WORLD");

var formLogin = document.querySelector("#formLogin");
var formCreateUser = document.querySelector("#formCreateUser");

var btnLogin = document.querySelector("#btnLogin");
var btnCreateUser = document.querySelector("#btnCreateUser");
var btnSignup = document.querySelector("#btnSignup");
var btnGoToLogin = document.querySelector("#btnGoToLogin");

var currentDirectory = window.location.pathname.split('/').slice(0, -1).join('/')

document.addEventListener("click", e => {
    switch (e.target) {
        case btnLogin:
            console.log("btnLogin")
            window.location.href = currentDirectory+"/dashboard.html";
            break;
        case btnCreateUser:
            console.log("btnCreateUser");
            formLogin.classList.add("hide");
            formCreateUser.classList.remove("hide");
            break;
        case btnSignup:
            console.log("btnSignup")
            break;
        case btnGoToLogin:
            console.log("btnGoToLogin");
            formLogin.classList.remove("hide");
            formCreateUser.classList.add("hide");
            break;
    };
});