console.log('Validate Email Address');

function validateEmail(email) {
    const regex =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validateEmail('abc123@gmail.com'));
console.log(validateEmail('hello@com'));
