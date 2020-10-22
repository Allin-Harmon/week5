var username = document.querySelector('#username'); //step 3
var user = document.getElementById('user'); //step 4
var password = document.getElementById('password'); //step 5
var userLabel = document.querySelector('form label[for=username]'); //step 6
var passLabel = document.querySelector('form label[for=password]'); //step 7
var rememberMe = document.querySelector('form input[type=checkbox]'); //step 8
var submitBtn = document.getElementsByTagName('button').item(0); //step 9 

//step 10
username.addEventListener('focus', function() {
    userLabel.classList.add('blue');
    username.classList.add('blue-border');
});

//step 11
username.addEventListener('blur', function() {
    userLabel.classList.remove('blue');
    username.classList.remove('blue-border');
    //to return them to their original color
    userLabel.classList.remove('label-error');
    username.classList.remove('error');
});

//step 12
password.addEventListener('focus', function() {
    passLabel.classList.add('blue');
    password.classList.add('blue-border');
});

//step 11 ???part2
password.addEventListener('blur', function() {
    passLabel.classList.remove('blue');
    password.classList.remove('blue-border');
    //to return them to their original color
    passLabel.classList.remove('label-error');
    password.classList.remove('error');
});

//step 12 ???part2
rememberMe.addEventListener('click', function() {
    window.alert('We will remember your username')
});

//step 13
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if ( username.value === "" && password.value === "") { //step 13 a
        username.classList.add('error');
        userLabel.classList.add('label-error');
        password.classList.add('error');
        passLabel.classList.add('label-error');
    } else if ( username.value === "" ) { //step 13 b
        username.classList.add('error');
        userLabel.classList.add('label-error');
        password.classList.remove('error');
        passLabel.classList.remove('label-error');
    } else if ( password.value === "" ) { //step 13 c
        username.classList.remove('error');
        userLabel.classList.remove('label-error');
        password.classList.add('error');
        passLabel.classList.add('label-error');
    } else { //step 13 d
        username.classList.remove('error');
        userLabel.classList.remove('label-error');
        password.classList.remove('error');
        passLabel.classList.remove('label-error');

        user.innerHTML = username.value;
        username.setAttribute('disabled', "");
        password.setAttribute('disabled', "");
        username.value = '';
        password.value = '';
    }
});