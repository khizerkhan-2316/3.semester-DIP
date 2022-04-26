const pElement = document.querySelector("#data")

async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    if (resp.ok) {
        return await resp.json()
    } else {
        throw new Error("NETWORK CALL FAILED")
    }
}

async function populateHTML() {
    const data = await getUsers()
    pElement.textContent = JSON.stringify(data)
    console.log("POPULATING")
}

populateHTML().catch(error => console.log(error))
console.log("LKJSHLKJS")
console.log("LKJSHLKJS")
console.log("LKJSHLKJS")
console.log("LKJSHLKJS")
