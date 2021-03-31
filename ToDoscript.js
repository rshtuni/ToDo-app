const input = document.getElementById('new-task')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')

getTask()


document.getElementById('searchTask').oninput = function(){
    let val = this.value
    let listItems = document.querySelectorAll('#list li')
    if(val){
       listItems.forEach((e) =>{
           if(e.innerText.search(val) == -1){
               e.classList.add('hide')
           }
           else {
               e.classList.remove('hide')
           }
       }) 
    } 
    else {
        listItems.forEach((e) =>{
            e.classList.remove('hide')
        })
    }
}


addBtn.onclick = function(){
    if(input.value == ''){
        alert('write some one')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)
    }
}


addBtn.addEventListener("click", () => {
    fetch('https://api-nodejs-todolist.herokuapp.com/task', {
        method: 'POST',
        body: JSON.stringify({
            description: input.value
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    })
    .then((data) => data.json())
}, 
)
 

function getTask () {
    fetch('https://api-nodejs-todolist.herokuapp.com/task', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    })
    .then((data) => data.json())
    .then(data => {
        let discription = data.data

       adTask(discription)
     })
}


function adTask(ad){
    for(let i = 0; i < ad.length; i++){
        let li = document.createElement('li')
        li.innerHTML = ad[i].description
        list.appendChild(li)
    }
}


