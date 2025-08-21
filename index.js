const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const field = event.target.querySelector('#name');
    const email = field.value;

    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (regex.test(email)) {

    }
    else {
        field.classList.add('nameError');
        console.log(field);
    }
})