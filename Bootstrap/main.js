document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let fullName = ${firstName} ${lastName};
    alert(Hello, ${fullName}! You submitted the form.);
});