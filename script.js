const form =  document.getElementById('form');
const username =  document.getElementById('username');
const email =  document.getElementById('email');
const password =  document.getElementById('password');
const password2 =  document.getElementById('password2');


//Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innertext = message;
}

//Show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


// Check email is valid

function isValidEmail(email) {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}

// Check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${input.id} is required`)
        }else {
            showSuccess(input);
        }
    })
}

//Check passwords match
function checkPasswordsMatch(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}

//Check inut Length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

//Get fieldname

function getFieldName(input) {
    return input.id.toUpperCase();
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    checkPasswordsMatch(password, password2)
})