console.log("Portfolio Website Loaded");
// Variables & Array
let skills = ["HTML", "CSS", "JavaScript"];

// Loop
skills.forEach(skill => console.log(skill));

// DOM Manipulation
document.querySelector(".btn2").addEventListener("click", () => {
    alert("Opening Contact Section");
});

// Form Validation
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        e.preventDefault();
    }
});
document.querySelector(".contact-form").addEventListener("submit", function(e) {

    let name = document.querySelector("input[type='text']").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();

    if (name === "") {
        alert("Name is required");
        e.preventDefault();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email address");
        e.preventDefault();
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});