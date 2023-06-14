function delet_by_id(){
    let text1 = document.getElementById("text1")
    let local_data = JSON.parse(localStorage.getItem('solve_time')) || [] //get saved times
    let delet_id = document.querySelector('#solve_id').value // get form data

    if(local_data.length > 0){
        text1.innerHTML = "time have been deleted"
        if((delet_id <= local_data.length) && (delet_id > 0)){
            text1.innerHTML = delet_id
            localStorage.removeItem('solve_time')
            local_data.splice(( local_data.length - delet_id ), 1) // count from last

            if(local_data.length > 0){
                localStorage.setItem('solve_time', JSON.stringify(local_data))
            }
            text1.innerHTML = "Time has been deleted"
        }
        else{
            text1.innerHTML = "ID not found <br>Please recheck ID and write only one ID at a time"
        }
    }
    else{
        text1.innerHTML = "You have no saved times left to delete"
    }
}

function quick_delet(x){
    let text2 = document.getElementById("text2")
    let local_data = JSON.parse(localStorage.getItem('solve_time')) || [] //get saved times
    if (local_data.length > 0) {
        localStorage.removeItem('solve_time')
        if(x==='all'){
            local_data = []
            text2.innerHTML = "All saved times deleted successfully"
        }
        else{
            local_data.splice(( local_data.length - x ), x) // count from last
            text2.innerHTML = `Last ${x} saved time deleted successfully <br>You have ${local_data.length} saved time remaing`
        }
        localStorage.setItem('solve_time', JSON.stringify(local_data))
    }
    else {
        text2.innerHTML = "You have no saved times left to delete"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.delete_form')
    const delet = document.getElementById("delete")
    const delet1 = document.getElementById("delete1")
    const delet5 = document.getElementById("delete5")
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        delet_by_id()
    })

    delet.addEventListener('click', function () {
        quick_delet('all')
    })
    delet1.addEventListener('click', function () {
        quick_delet(1)
    })
    delet5.addEventListener('click', function () {
        quick_delet(5)
    })
})