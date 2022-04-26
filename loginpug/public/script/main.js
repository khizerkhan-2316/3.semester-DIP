const userName = () => document.querySelector("#loginName").value
const password = () => document.querySelector("#loginPassword").value
const error = document.querySelector("#error")

document.querySelector("#loginButton").onclick = async (event) => {
    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({userName: userName(), password: password()})
    })
    if (response.ok) {
        window.location.href = "/"
    } else {
        error.textContent = "FAILED TO LOG IN"
    }
}

