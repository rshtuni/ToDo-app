const form = document.getElementById("form")
const password = document.getElementById("password")
const email = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((data) => data.json())
    .then(data => window.location.href = "ToDo.html")
})