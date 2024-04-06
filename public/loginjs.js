const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

document.addEventListener("DOMContentLoaded", function() {
    // Kode JavaScript Anda di sini
    // AJAX request for sign up
document.querySelector('.sign-up-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const response = await fetch('/signup', {
        method: 'POST',
        body: formData
    });
    const result = await response.text();
    alert(result); // Show response to user (e.g., "User created successfully")
});

// AJAX request for sign in
document.querySelector('.sign-in-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const response = await fetch('/login', {
        method: 'POST',
        body: formData
    });
    const result = await response.text();
    alert(result); // Show response to user (e.g., "Login successful")
    // Redirect user to home page or handle as needed
});
});