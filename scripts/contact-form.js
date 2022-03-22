let form = document.querySelector('[data-provider="contact-form"')

let nameInput = form.querySelector('#name')
let email = form.querySelector('#email')
let submit = form.querySelector('[type="submit"]')

function attachEvents() {
    submit.addEventListener("click", handleSubmit)
}

function handleSubmit() {
    let nameValue = nameInput.value
    let emailValue = email.value
    if (validate(nameValue, emailValue)) {
        alert(`Hello ${nameValue}, you will recieve an email shortly to ${emailValue}!`)
    } else {
        alert('Hi, check your details again!')
    }
}

function validate(name, email) {
    let emailValid = email && email.indexOf("@") > 0
    return name && emailValid
}

document.addEventListener('DOMContentLoaded', attachEvents)