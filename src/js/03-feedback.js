import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALST_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(savedData, 500));
function savedData(event) {
  event.preventDefault();
  const dataToSave = { email: email.value, message: message.value };
  localStorage.setItem(LOCALST_KEY, JSON.stringify(dataToSave));
}

updateForm();
function updateForm() {
  const parsedData = JSON.parse(localStorage.getItem(LOCALST_KEY)) || '';
  if (parsedData || '') {
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ Email: email.value, Message: message.value });
  form.reset();
  localStorage.removeItem(LOCALST_KEY);
});

// const test = throttle(() => console.log('blablatest'), 3000);
// test();

// console.log(email);
// console.log(message);

// const savedData = localStorage.getItem(LOCALST_KEY);
// const parsedData = JSON.parse(savedData) || "";
//   console.log(parsedData);
