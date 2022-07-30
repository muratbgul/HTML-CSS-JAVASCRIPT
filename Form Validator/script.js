const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error(input, massage){
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = massage;
    div.className = "invalid-feedback";
}

function succes(input){
    input.className = "form-control is-valid";
}


form.addEventListener("submit",function(e){
    e.preventDefault(); 

    if(username.value === ""){
        error(username,"username gerekli");
    }else{
        succes(username);
    }
    if(email.value === ""){
        error(email,"email gerekli");
    }else{
        succes(email);
    }
    if(password.value === ""){ 
        error(password,"password gerekli");
    }else{
        succes(password);
    }
    if(repassword.value === ""){
        error(repassword,"repassword gerekli");
    }else{
        succes(repassword);
    }
});

