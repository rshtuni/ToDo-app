const form = document.getElementById("form")
const name = document.getElementById("name")
const password = document.getElementById("password")
const email = document.getElementById("email")
const age = document.getElementById("age")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch('https://api-nodejs-todolist.herokuapp.com/user/register', {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value,
            age: age.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    .then((data) => data.json())
    .then(data => { localStorage.setItem("token", data.token) })
    .then(data => window.location.href = "login.html")
})

