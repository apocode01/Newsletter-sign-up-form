const form = document.querySelector('.form');
const field = form.querySelector('#name');
const formState = document.querySelector('.formState');
const successState = document.querySelector('.successState');
const errorMessage = form.querySelector('#name-error');

form.addEventListener('submit', event => {
    event.preventDefault();

    const email = field.value;

    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (regex.test(email)) {
        formState.style.display = "none";
        successState.style.display = "flex";
        const emailSpan = document.querySelector('.bold');
        emailSpan.textContent = email;
    }
    else {
        field.classList.add('nameError');
        errorMessage.textContent = "Valid email required";
    }
})

const dismissButton = document.getElementById('dismiss');

dismissButton.addEventListener('click', event => {
    field.value = "";
    field.classList.remove('nameError');
    errorMessage.textContent = "";
    formState.style.display = "flex";
    successState.style.display = "none";
})