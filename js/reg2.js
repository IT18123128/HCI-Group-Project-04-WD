const form = document.getElementById('form');
const title = document.getElementById('titleid');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const birthday = document.getElementById('birthday');
const gender = document.getElementById('gender');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//const agree = document.getElementById('agree');

//const cond = true;


form.addEventListener('submit', e => {
	e.preventDefault();


	
	checkInputs();

	// if(cond="right"){
		
	// }
	
	// if(){

	// }
	// else{
	// 	window.location.href = 'login.html'
	// }
});

function  checkInputs() {
	// trim to remove the whitespaces
	const titleValue = title.value.trim();
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const birthdayValue = birthday.value.trim();
    const genderValue = gender.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	//const agreeValue = agree.value.trim();

	let cond= true;
	let cond1= true;
	let cond2= true;
	let cond3= true;
	let cond4= true;
	let cond5= true;
	let cond6= true;
	let cond7= true;
	let cond8= true;
	let cond9= true;
	let cond10= true;
	let cond11= true;
	let cond12= true;
	let cond13= true;
	
	if(titleValue === '') {
		
		setErrorFor(title, 'title cannot be blank');
		cond=false;
		console.log(cond);
		// cond="wrong";

	} else {
		setSuccessFor(title);
		
	}

	if(fnameValue === '') {
		setErrorFor(fname, 'first name cannot be blank');
		cond1=false;
		console.log("i run");
		// cond1="wrong";
	
	} else if(!checkLetters(fnameValue)) {
		setErrorFor(fname, 'Not a valid name');
		cond2=false;
		//cond2="wrong";
		
	}else {
		setSuccessFor(fname);
	}
	

    if(lnameValue === '') {
		setErrorFor(lname, 'last name cannot be blank');
		cond3=false;
	
	} else if(!checkLetters(lnameValue)) {
		setErrorFor(lname , 'Not a valid name');
		cond4=false;
		
	} else {
		setSuccessFor(lname);
	}
	

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		cond5=false;
		//cond=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		cond6=false;
		//cond=false;
	} else {
		setSuccessFor(email);
	}
	

    if(numberValue === '') {
		setErrorFor(number, 'number cannot be blank');
		cond7=false;
		//cond=false;
		//cond="wrong";
	} else if(!isPhone(numberValue)) {
		setErrorFor(number, 'Not a valid number');
		cond8=false;
		//cond=false;
		//cond="wrong";
	} else {
		setSuccessFor(number);
	}
	

    if(birthdayValue === '') {
		setErrorFor(birthday, 'birthday cannot be blank');
		cond9=false;
		//cond="wrong";
	} else {
		setSuccessFor(birthday);
	}
	
    if(genderValue === '') {
		setErrorFor(gender, 'gender cannot be blank');
		cond10=false;
		//cond="wrong";
	} else {
		setSuccessFor(gender);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		cond11=false;
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		cond12=false;
		//cond="wrong";
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		cond13=false;
		//cond="wrong";
	} else{
		setSuccessFor(password2);
	}
	// if(!agreeValue.checked) {
	// 	setErrorFor(agree, 'agree cannot be blank');
	// 	//cond11=false;
	// } else {
	// 	setSuccessFor(agree);
	// }


	// if(cond){
	// 	return true;
	// }else{
	// 	return false;
	// }


	console.log(cond12);
	if(cond==true && cond1==true && cond2==true && cond3==true && cond4==true && cond5==true && cond6==true && cond7==true && cond8==true && 
		cond9==true && cond10==true && cond11==true && cond12==true && cond13==true ){
		window.location.href = 'loginnew.html'
	}
	


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	

}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(number){
    return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(number);
}
function checkLetters(fname){
    return /^[a-zA-Z]*$/.test(fname);
}


// image uploader








