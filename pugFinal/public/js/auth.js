const credSignupBtn = document.querySelector('#credSignupBtn')
const credLoginBtn = document.querySelector('#credLoginBtn')
const userNameInp = document.querySelector('#userNameInp')
const passwordInp = document.querySelector('#passwordInp')
const error = document.querySelector('.credentialsErrorArea')

if (credSignupBtn) {
    credSignupBtn.onclick = signup
}
if (credLoginBtn) {
    credLoginBtn.onclick = login
}

async function signup() {
    const body = JSON.stringify({username: userNameInp.value, password: passwordInp.value})
    const resp = await fetch("/users", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: body
    })
    if (resp.ok) {
        window.location.href = '/login'
    } else {
        error.textContent = "Signup failed"
    }
}

async function login() {
    const body = JSON.stringify({username: userNameInp.value, password: passwordInp.value})
    const resp = await fetch("/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: body
    })
    if (resp.ok) {
        window.location.href = '/'
    } else {
        error.textContent = "Login failed"
    }
}