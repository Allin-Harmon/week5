var username = document.querySelector('#username'); //hw1 step 3
var user = document.getElementById('user'); //hw1 step 4
var password = document.getElementById('password'); //hw1 step 5
var userLabel = document.querySelector('form label[for=username]'); //hw1 step 6
var passLabel = document.querySelector('form label[for=password]'); //hw1 step 7
var rememberMe = document.querySelector('form input[type=checkbox]'); //hw1 step 8
var submitBtn = document.getElementsByTagName('button').item(1); //hw1 step 9

var logOutBtn = document.getElementsByTagName('button').item(0);

//hw1 step 10
username.addEventListener('focus', function () {
	userLabel.classList.add('blue');
	username.classList.add('blue-border');
});

//hw1 step 11
username.addEventListener('blur', function () {
	userLabel.classList.remove('blue');
	username.classList.remove('blue-border');
	//to return them to their original color
	userLabel.classList.remove('label-error');
	username.classList.remove('error');
});

//hw1 step 12
password.addEventListener('focus', function () {
	passLabel.classList.add('blue');
	password.classList.add('blue-border');
});

//hw1 step 11 ???part2
password.addEventListener('blur', function () {
	passLabel.classList.remove('blue');
	password.classList.remove('blue-border');
	//to return them to their original color
	passLabel.classList.remove('label-error');
	password.classList.remove('error');
});

//hw1 step 12 ???part2
rememberMe.addEventListener('click', function () {
	if (rememberMe.checked) {
		// window.alert('We will remember your username');
		//? This is not mentioned in the instructions, however if we already have checked rememberMe and we wan to be "forgotten" we can't actually have that happen until we submit, which you can't submit until you pass in a valid username & password. To avoid this we can listen on change of the input and appropriately destroy create localStorage. This is sort of hotfix as it still isn't perfect i.e. you have to refresh the page to reset the username.value back to empty, there would be a better way to do this but would require to much modification of code.
		localStorage.setItem('username', username.value);
	} else {
		localStorage.removeItem('username');
	}
});

// hw1 step 13
submitBtn.addEventListener('click', function (e) {
	// e.preventDefault(); //? You'll need uncomment this to see the validation function working.

	if (username.value === '' && password.value === '') {
		//hw1 step 13 a
		username.classList.add('error');
		userLabel.classList.add('label-error');
		password.classList.add('error');
		passLabel.classList.add('label-error');
	} else if (username.value === '') {
		//hw1 step 13 b
		username.classList.add('error');
		userLabel.classList.add('label-error');
		password.classList.remove('error');
		passLabel.classList.remove('label-error');
		validate(); //? uncomment this and comment out 64-67 to see validation work
	} else if (password.value === '') {
		// hw1 step 13 c
		username.classList.remove('error');
		userLabel.classList.remove('label-error');
		password.classList.add('error');
		passLabel.classList.add('label-error');
		validate(); //? uncomment this and comment out 71-74 to see validation work
	} else {
		//hw1 step 13 d
		username.classList.remove('error');
		userLabel.classList.remove('label-error');
		password.classList.remove('error');
		passLabel.classList.remove('label-error');
		// validate(); //? uncomment this and comment out 78-81 to see validation work

		//hw2 step 5
		if (rememberMe.checked) {
			localStorage.setItem('username', username.value);
		} else {
			localStorage.removeItem('username', username.value); //? No error will be thrown if it tries to remove a key that doesn't exist, I can't remember if I explained this in class.
		}

		//! We don't need to check if username and password are empty, we've already determined this by just being in this else block.
		// if ((username !== '') & (password !== '')) {
		// 	sessionStorage.setItem('username', username.value);
		// }
		sessionStorage.setItem('username', username.value);
	}
});

//? Validation function, uncomment to see working.
// function validate() {
// 	username.classList.remove('error');
// 	userLabel.classList.remove('label-error');
// 	password.classList.remove('error');
// 	passLabel.classList.remove('label-error');
// 	const pattern = /^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
// 	let error = '';

// 	debugger;
// 	if (!pattern.test(username.value)) {
// 		error += 'Invalid username format\n';
// 		username.classList.add('error');
// 		userLabel.classList.add('label-error');
// 	}

// 	console.log(10 >= password.value.length);
// 	console.log(password.value.length >= 6);

// 	if (10 < password.value.length || password.value.length < 6) {
// 		error += 'Password must be between 6 and 10 characters';
// 		password.classList.add('error');
// 		passLabel.classList.add('label-error');
// 	}

// 	if (error !== '') {
// 		alert(error);
// 	}
// }

//hw2 step 6
window.addEventListener('load', function () {
	//! This is making the checkbox always checked when the page loads b/c you are checking if username does NOT equal null, username is an element node therefore this code block will always execute. We want to write 2 if statements one that checks if localStorage has a key of username and another if sessionStorage has a key of username (instructions say user but doesn't really matter) I wrote the code below to show that working
	// if (username !== null) {
	// 	username.value = localStorage.getItem('username', username.value);
	// 	rememberMe.checked = true;
	// 	user.innerHTML = sessionStorage.getItem('username');
	// }
	//? Set username value to whats stored in local storage and have the box pre-checked if the user checked the rememberMe box before "sign in"
	if (localStorage.getItem('username') !== null) {
		username.value = localStorage.getItem('username');
		rememberMe.checked = true;
	}

	//? Set the username in the nav after successful login
	if (sessionStorage.getItem('username') !== null) {
		user.innerHTML = sessionStorage.getItem('username');
	}
});

//hw 2 step 7
logOutBtn.addEventListener('click', function () {
	sessionStorage.removeItem('username'); //destroy user data in session storage
	window.location.replace('index.html');
});
