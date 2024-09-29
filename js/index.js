"user strict"
// Html elements
var nameInput  = document.querySelector(".signName");
var emailInput  = document.querySelector(".signEmail");
var passInput  = document.querySelector(".signPass");
var signupBtn  = document.querySelector(".signUp");
var message = document.querySelector(".error");
var messageLogin = document.querySelector(".errorLogin");
var loginEmail = document.querySelector(".loginEmail");
var loginPass = document.querySelector(".loginPass");
var loginBtn = document.querySelector(".loginBtn");



// app variables
var usersList = JSON.parse(localStorage.getItem("users")) || [];
var userName = localStorage.getItem("username");
if(userName){
    document.querySelector(".username").innerHTML = userName;
}
// function to add user
function addUser(){

if (!validInput()){
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        pass: passInput.value,
    };
    if(emailExist()==false){
        message.innerHTML='<span class="p-2 text-danger">Email Exist</span>';
    }else{
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    message.innerHTML='<span class="p-2 text-success">Success</span>';
    // window.location.href = "index.html";
    }
}
}

function validInput(){
    if(nameInput.value === "" || emailInput.value === "" || passInput.value ===""){
        message.innerHTML= '<span class="p-2 text-danger">All inputs are required</span>';
        return true;
    }else{
        message.innerHTML="";
        return false;
    }
}
function emailExist() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
           
            return false;
        }
    }
}

// --------Login Form-------------

function validInputlogin(){
    if(loginEmail.value === "" || loginPass.value === "" ){
        messageLogin.innerHTML= '<span class="p-2 text-danger">All inputs are required</span>';
        return true;
    }else{
        messageLogin.innerHTML='<span class="p-2 text-danger">incorrect email or password</span>';
        return false;
    }
}

function loginUser(){
    if(!validInputlogin()){
        var email = loginEmail.value;
        var password = loginPass.value;
        for(var i =0 ; i<usersList.length; i++){
            if(usersList[i].email.toLowerCase() === email.toLowerCase() && usersList[i].pass.toLowerCase() ===password.toLowerCase()){
                localStorage.setItem("username",usersList[i].name);
             window.location.href="home.html";
            }else{
                messageLogin.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>';
            }
    }
}
}

function logout() {
    localStorage.removeItem('username');
}