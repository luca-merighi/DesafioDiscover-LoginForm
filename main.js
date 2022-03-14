const unlockPassword = document.querySelector('.password-unlock')
const passwordInput = document.querySelector('#password') 

unlockPassword.addEventListener('click', function() {
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
})