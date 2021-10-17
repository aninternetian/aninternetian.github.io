document.addEventListener('DOMContentLoaded', function() {

    let login = document.querySelector('.btn.btn-secondary');
    let signup = document.querySelector('.btn.btn-primary');

    // let acctype = "account";

    login.addEventListener('click', function() {
        document.querySelector('.h3.mb-3.fw-normal').innerHTML = "Please log in";
        document.querySelector('.w-100.btn.btn-lg.btn-primary').innerText = "Log in";
        })

    signup.addEventListener('click', function() {
        document.querySelector('.h3.mb-3.fw-normal').innerHTML = "Please sign up";
        document.querySelector('.w-100.btn.btn-lg.btn-primary').innerText = "Sign up";
        })


});