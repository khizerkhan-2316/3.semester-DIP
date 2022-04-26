const nameInput = document.querySelector("#inp")
const errorDiv = document.querySelector("#error")

const nameInput2 = document.querySelector("#inp2")
const errorDiv2 = document.querySelector("#error2")


nameInput.oninput = handleOnInput
nameInput2.onchange = handleOnChange


function handleOnInput(e) {
    handleError("")
    const error = validateInput(e.target.value)

    if (error) {
        handleError(error)
    }
}

function handleOnChange(e) {
    handleError2("")
    const error = validateInput(e.target.value)
    if (error) {
        handleError2(error)
        nameInput2.focus()
    }
}

function handleError(error) {
    errorDiv.textContent = error
}

function handleError2(error) {
    errorDiv2.textContent = error
}

function validateInput(inp) {

    if (inp.includes("a")) {
        return "cannot contain a"
    }
    if (inp.length > 7) {
        return "too long"
    }
    if (inp.length < 3) {
        return "too short"
    }
}


const inputUserName = document.querySelector("#inpUserName")
const errorDivUserName = document.querySelector("#errorUserName")

const inputPassword = document.querySelector("#inpPassword")
const errorDivPassword = document.querySelector("#errorPassword")

const inputEmail = document.querySelector("#inpEmail")
const errorDivEmail = document.querySelector("#errorEmail")

inputEmail.onchange = handleErrorNew
inputUserName.onchange = handleErrorNew
inputPassword.onchange = handleErrorNew
inputEmail.onblur = handleBlur
inputUserName.onblur = handleBlur
inputPassword.onblur = handleBlur

function handleBlur(e) {
    const div = document.querySelector(`#${e.target.id} + div + div`)
    if (div.textContent) {
        e.target.focus()
    }
}


function handleErrorNew(e) {

    if (e.target === inputEmail) {
        errorDivEmail.textContent = ""
        const error = validateEmail(e.target.value)
        if (error) {
            errorDivEmail.textContent = error
            inputEmail.focus()
        }
    }
    if (e.target === inputUserName) {
        errorDivUserName.textContent = ""
        const error = validateUserName(e.target.value)
        if (error) {
            errorDivUserName.textContent = error
            inputUserName.focus()
        }
    }
    if (e.target === inputPassword) {
        errorDivPassword.textContent = ""
        const error = validatePassword(e.target.value)
        if (error) {
            errorDivPassword.textContent = error
            inputPassword.focus()
        }
    }
}


function validateEmail(email) {
    if (!email.includes("@")) {
        return "this is not an email"
    }
    if (!email.endsWith(".dk")) {
        return "email should be danish"
    }
}

function validateUserName(userName) {
    if (userName.includes("sex")) {
        return "dirty bastard"
    }
    if (userName.length > 8) {
        return "too long"
    }
}

function validatePassword(password) {
    if (password.length < 6) {
        return "too short"
    }
    if (!password.match(/\d/)) {
        return "should contain a number"
    }
}