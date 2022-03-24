/* 
    handles submission + validation of contact form 
 */

//get form element
let form = document.querySelector('[data-provider="contact-form"')

//get children we care about from form element
let nameInput = form.querySelector('#name')
let email = form.querySelector('#email')
let submit = form.querySelector('[type="submit"]')

//attach event listeners
function attachEvents() {
    submit.addEventListener("click", handleSubmit)
}

//handle submit click
function handleSubmit() {
    let nameValue = nameInput.value
    let emailValue = email.value
    if (validate(nameValue, emailValue)) {
        alert(`Hello ${nameValue}, you will recieve an email shortly to ${emailValue}!`)
    } else {
        alert('Hi, check your details again!')
    }
}

//validate fields data
function validate(name, email) {
    let emailValid = email && email.indexOf("@") > 0
    return name && emailValid
}

//attach to page on DOMContentLoaded
document.addEventListener('DOMContentLoaded', attachEvents)