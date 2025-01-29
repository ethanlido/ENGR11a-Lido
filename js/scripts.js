/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var response = grecaptcha.getResponse(); // hCaptcha response
    if (response.length === 0) {
        event.preventDefault();  // Prevent form submission
        alert("Please complete the CAPTCHA.");
    } else {
        // Set the response in the hidden field
        document.getElementById("hCaptchaResponse").value = response;
    }
});



form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});