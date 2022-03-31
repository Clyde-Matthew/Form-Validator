"use strict";
const form = document.getElementById("form");
const password1EL = document.getElementById("password1");
const password2EL = document.getElementById("password2");
const button = document.getElementById("button");
const messageContainer = document.getElementById("message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using Constraint API
  isValid = form.checkValidity();
  //   check if passwords match
  if (password1EL.value === password2EL.value) {
    passwordsMatch = true;
    password1EL.style.borderColor = "green";
    password2EL.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.style.color = "red";
    message.textContent = "Make sure passwords match";
    messageContainer.style.borderColor = "red";
    password1EL.style.borderColor = "red";
    password2EL.style.borderColor = "red";
    return;
  }

  // if form is valid and passwords match, submit form
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    storeFormData();
  }
}

// store form data
function storeFormData() {
  const formData = new FormData(form);
  console.log(formData);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
}

function processFormData(e) {
  e.preventDefault();
  // validate form
  validateForm();
}

// Event Listener
form.addEventListener("submit", processFormData);
