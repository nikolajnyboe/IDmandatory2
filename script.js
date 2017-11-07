console.log("HELLO WORLD");

var formLogin = document.querySelector("#formLogin");
var formCreateUser = document.querySelector("#formCreateUser");

var btnLogin = document.querySelector("#btnLogin");
var btnCreateUser = document.querySelector("#btnCreateUser");
var btnSignup = document.querySelector("#btnSignup");
var btnGoToLogin = document.querySelector("#btnGoToLogin");

document.addEventListener("click", e => {
    switch (e.target) {
        case btnCreateUser:
            console.log("btnCreateUser");
            break;
        case btnGoToLogin:
            console.log("btnGoToLogin");
            break;
        default:
            console.log('Sorry');
    }
});