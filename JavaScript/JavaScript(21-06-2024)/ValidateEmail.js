function validateEmail(email) {
    let x = "@";
    let y = ".com";
    let z = " ";
    console.log(email + " is a valid email");
    if (email.includes(x, y) && !email.includes(z)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

validateEmail("potlapula.nithish@gmail.com");
validateEmail("nithish.p.com");
validateEmail("nith ish.p@gmail.com");