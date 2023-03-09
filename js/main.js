const form = document.getElementById('form');

const submitButton = document.getElementById("submit-button");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("msg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    
    event.preventDefault();

    const formData = {};
    const errors = [];

    const fullNameValue = fullNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageTextarea.value.trim();

    if (fullNameValue !== "") {
        formData.fullname = fullNameValue;
    } else {
        alert("Enter your full name.");
        errors.push("Full name is required.");
    }

    if (emailValue !== "") {
        if (emailRegex.test(emailValue)) {
          formData.email = emailValue;
        } else {
          alert("Enter a valid email.");
          errors.push("Invalid email address.");
        }
      } else {
        alert("Enter your email.");
        errors.push("Email address is required.");
      }

      if (messageValue !== "") {
        formData.message = messageValue;
      } else {
        alert("Enter your message.");
        errors.push("Message is required.");
      }

      if (errors.length > 0) {
        console.error("Form submission failed:", errors);
      } else {
        alert("Form submitted successfully.");
        console.log("Form submitted successfully:", formData);
        fullNameInput.value = "";
        emailInput.value = "";
        messageTextarea.value = "";
      }
    
  };
  
submitButton.addEventListener('click', validateForm);
