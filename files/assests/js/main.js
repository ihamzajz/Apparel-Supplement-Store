// CONTACT US FORM VALIDATION STARTS
function validation(){
    var cuName = document.getElementById('cuName').value;
    var cuEmail = document.getElementById('cuEmail').value;
    var cuTextarea = document.getElementById('cuTextarea').value;
    var emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var nameRegx = /^([a-zA-Z ]){2,50}$/;

    // FULLNAME
     if (cuName == ''){
         document.getElementById('cuNamesmall').innerHTML = "Please enter your full name";
         document.getElementById('cuNamesmall').style.color = "red";
         return false;
        }
    if (!nameRegx.test(cuName)){
        document.getElementById('cuNamesmall').innerHTML = "Invalid name"; 
        document.getElementById('cuNamesmall').style.color = "red";
        return false;
    } else {
        document.getElementById('cuNamesmall').innerHTML = "Valid name"; 
        document.getElementById('cuNamesmall').style.color = "green";
    }


    // EMAIL
    if (cuEmail == ''){
        document.getElementById('cuEmailsmall').innerHTML = "Please enter your email address";
        document.getElementById('cuEmailsmall').style.color = "red";
        return false;
    }
    if (!emailRegx.test(cuEmail)){
        document.getElementById('cuEmailsmall').innerHTML = "Invalid email";
        document.getElementById('cuEmailsmall').style.color = "red";
        return false;
    } else {
        document.getElementById('cuEmailsmall').innerHTML = "Valid email";
        document.getElementById('cuEmailsmall').style.color = "green";
    }

    // TEXTAREA
    if (cuTextarea == ''){
        document.getElementById('cuTextareasmall').innerHTML = "Please explain why you want to contact us";
        document.getElementById('cuTextareasmall').style.color = "red";
        return false;
    }
};  



// LOGIN FORM VALIDATION STARTS
function val(){
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    var emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var pwRegx = /^([a-zA-Z0-9]{8,20})$/;



// EMAIL
if (loginEmail == ''){
    document.getElementById('loginemailsmall').innerHTML = "Please enter your email address";
    document.getElementById('loginemailsmall').style.color = "red";
    return false;
}
if (!emailRegx.test(loginEmail)){
    document.getElementById('loginemailsmall').innerHTML = "Invalid email";
    document.getElementById('loginemailsmall').style.color = "red";
    return false;
} else {
    document.getElementById('loginemailsmall').innerHTML = "Valid email";
    document.getElementById('loginemailsmall').style.color = "green";
}


//PASSWORD
if (loginPassword == '') {
document.getElementById('loginpwsmall').innerHTML = "Please enter your password";
document.getElementById('loginpwsmall').style.color = "red";
return false;
}

if (loginPassword.length < 8) {
    document.getElementById('loginpwsmall').innerHTML = "Password must be at least 8 characters";
    document.getElementById('loginpwsmall').style.color = "red";
    return false;
}
if (loginPassword.length > 20) {
    document.getElementById('loginpwsmall').innerHTML = "Password must be maximum 20 characters";
    document.getElementById('loginpwsmall').style.color = "red";
    return false;
}
if (!pwRegx.test(loginPassword)) {
    document.getElementById('loginpwsmall').innerHTML = "Invalid password";
    document.getElementById('loginpwsmall').style.color = "red";
    return false;
} else {
    document.getElementById('loginpwsmall').innerHTML = "Valid password";
    document.getElementById('loginpwsmall').style.color = "green";
}
};

// product page image change on click
$('.sub-img').on('click',  function() {
    $('.main-img').prop('src', this.src);
});


function sc()
{
    var y = window.scrollY;
    
    if(y > 1000)
    {
        document.getElementById('topbtn').style.display = "block";
    }
    else
    {
        document.getElementById('topbtn').style.display = "none";
    }
}