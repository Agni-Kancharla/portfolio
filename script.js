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