const loginBtn = document.querySelector('#loginLink')
const signupBtn = document.querySelector('#signupLink')
const logoutBtn = document.querySelector('#logoutLink')


if (loginBtn) {
    loginBtn.onclick = loginHandler
}
if (signupBtn) {
    signupBtn.onclick = signupHandler
}
if (logoutBtn) {
    logoutBtn.onclick = logoutHandler
}

function loginHandler() {
    window.location.href = '/login'
}

function signupHandler() {
    window.location.href = '/signup'
}

function logoutHandler() {
    fetch("/logout").finally(() => window.location.href = '/')
}