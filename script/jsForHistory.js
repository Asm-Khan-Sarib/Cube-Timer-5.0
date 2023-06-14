const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')


// make table from array
function make_table(all_data) {
    const text1 = document.getElementById('text1')
    const text2 = document.getElementById('text2')

    let text = '<tr><td><b>Id</b></td><td><b>Time</b></td><td><b>Scramle</b></td></tr>'
    for (let i = all_data.length-1 ; i >=0 ; i--) {
        text += `<tr>`
        text += `<td>${all_data.length-i}</td>`
        text += `<td>${all_data[i].time}</td>`
        text += `<td>${all_data[i].scramble}</td>`
        text += '</tr>'
    }
    text2.innerHTML = ''
    text1.innerHTML = `<br><br><table>${text}</table><br><br><br><br>`
}

// get data from local storage and default sort by time
function sort_by_time() {
    const text1 = document.getElementById('text1')
    const text2 = document.getElementById('text2')

    let local_data = JSON.parse(localStorage.getItem('solve_time')) || []
    if (local_data.length >= 1) {
        make_table(local_data)
    }
    else {
        text1.innerHTML = ''
        text2.innerHTML = 'Your history is empty'
    }
}

document.addEventListener('DOMContentLoaded', function (){
    sort_by_time()
})