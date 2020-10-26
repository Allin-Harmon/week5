//! Everything looked great for HW #1, since I didn't have a ton of feedback I added a new js file named app2 that has some additional event listeners
var username = document.querySelector('#username'); //hw1 step 3
var user = document.getElementById('user'); //hw1 step 4 //? I like the mix of different DOM methods
var password = document.getElementById('password'); //hw1 step 5
var userLabel = document.querySelector('form label[for=username]'); //hw1 step 6
var passLabel = document.querySelector('form label[for=password]'); //hw1 step 7
var rememberMe = document.querySelector('form input[type=checkbox]'); //hw1 step 8
var submitBtn = document.getElementsByTagName('button').item(1); //hw1 step 9
submitBtn = document.getElementsByTagName('button')[1]; //? You can still access HTML collection indexes with the square bracket notation. I prefer to do it the way you have it with the .item() method

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
	//to return them to their original color //? Nice touch, nice to reset them back to grey after they input something new in the input box. You could also use the change event, this would only remove the red after blur & the input.value is something different
	// userLabel.classList.remove('label-error');
	// username.classList.remove('error');
});

//? On change event mentioned above
username.addEventListener('change', function () {
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
		// window.alert('We will remember your username'); //? Thanks for commenting this out
	}
});

// hw1 step 13
submitBtn.addEventListener('click', function () {
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
	} else if (password.value === '') {
		// hw1 step 13 c
		username.classList.remove('error');
		userLabel.classList.remove('label-error');
		password.classList.add('error');
		passLabel.classList.add('label-error');
	} else {
		//hw1 step 13 d
		username.classList.remove('error');
		userLabel.classList.remove('label-error');
		password.classList.remove('error');
		passLabel.classList.remove('label-error');

		//hw2 step 5
		if (rememberMe.checked) {
			localStorage.setItem('username', username.value);
		} else {
			localStorage.removeItem('username', username.value);
		}

		if ((username !== '') & (password !== '')) {
			sessionStorage.setItem('username', username.value);
		}
	}
});

//hw2 step 6
window.addEventListener('load', function () {
	if (username !== null) {
		username.value = localStorage.getItem('username', username.value);
		rememberMe.checked = true;
		user.innerHTML = sessionStorage.getItem('username');
	}
});

//hw 2 step 7
logOutBtn.addEventListener('click', function () {
	sessionStorage.removeItem('username'); //destroy user data in session storage
	window.location.replace('index.html');
});
