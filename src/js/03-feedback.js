
import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onFormData, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function onFormData() {
  const objectForm = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectForm));
}

localStorageData();

function localStorageData() {
  let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}