const passwordInput = document.querySelector(`#password`);
const passwordConfirmInput = document.querySelector(`#password-confirm`);
const form = document.querySelector(`form`);

const validationText = document.querySelector(`.password-validation`);
const confirmTest = document.querySelector(`.password-validation-confirm`);

const lengthCondition = document.querySelector(`.first`);
const caseCondition = document.querySelector(`.second`);
const symbolCondition = document.querySelector(`.third`);

passwordInput.addEventListener(`focus`, function () {
  validationText.classList.remove(`hidden`);
  form.style.height = `250px`;
});

passwordInput.addEventListener(`focusout`, function () {
  validationText.classList.add(`hidden`);
  form.style.height = `150px`;
});

passwordInput.addEventListener(`input`, function () {
  const inputContent = passwordInput.value;

  //if password has 8 to 16 characters
  const passwordRequiredLength = /^.{8,}$/;
  if (passwordRequiredLength.test(inputContent)) {
    lengthCondition.style.color = "green";
  } else {
    lengthCondition.style.color = "red";
  }

  //if password contain at least one lower letter,  one Upper character and one number
  const passwordRequiredCase = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

  if (passwordRequiredCase.test(inputContent)) {
    caseCondition.style.color = `green`;
  } else {
    caseCondition.style.color = `red`;
  }

  //if password contain at least one special symbol
  const passwordRequiredSymbol = /^(?=.*[@#$%^&+=.?,;:'"'/!()]).*$/;
  if (passwordRequiredSymbol.test(inputContent)) {
    symbolCondition.style.color = `green`;
  } else {
    symbolCondition.style.color = `red`;
  }

  if (
    passwordRequiredSymbol.test(inputContent) &&
    passwordRequiredLength.test(inputContent) &&
    passwordRequiredCase.test(inputContent)
  ) {
    passwordInput.style.cssText =
      "border: 1px solid green;background-color:lightgreen";
    passwordInput.setCustomValidity(``);
  } else {
    passwordInput.style.cssText = "border: 1px solid red";
    passwordInput.setCustomValidity(`Please match required format`);
  }
});

/////////////////////////////////
/////Confirm Password
passwordConfirmInput.addEventListener(`focus`, function () {
  confirmTest.classList.remove(`hidden`);
  form.style.height = `180px`;
});

passwordConfirmInput.addEventListener(`focusout`, function () {
  confirmTest.classList.add(`hidden`);
  form.style.height = `150px`;
});

passwordConfirmInput.addEventListener(`input`, function () {
  if (
    passwordConfirmInput.value === passwordInput.value &&
    passwordInput.value != null
  ) {
    passwordConfirmInput.style.cssText =
      "border: 1px solid green;background-color:lightgreen";
    confirmTest.style.color = `green`;
    confirmTest.textContent = `Password matches`;
    passwordConfirmInput.setCustomValidity(``);
  } else {
    passwordConfirmInput.style.cssText = "border: 1px solid red";
    confirmTest.style.color = `red`;
    confirmTest.textContent;
    confirmTest.textContent = `*Passwords does not match`;
    passwordConfirmInput.setCustomValidity(`Password does not match`);
  }
});
