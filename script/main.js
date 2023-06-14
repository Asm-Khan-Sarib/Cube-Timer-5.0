//for timer
let timerInterval
let startTime;
let isRunning = false
let text;
let time_string=''
let scramble_string=''
//for cube
let up = []
let left = []
let front = []
let right = []
let back = []
let down = []
let t_up = []
let t_left = []
let t_front = []
let t_right = []
let t_back = []
let t_down = []
/*----------------------------------------------------------------------------------------------------------*/
//timer
function timer() {
  if (!isRunning) {
    document.getElementById("delete").disabled=true
    document.getElementById("add2").disabled=true // cannot use time button when timer is running
    startTimer()
  } else {
    stopTimer()
    document.getElementById("delete").disabled=false // enable delete button after saving a time
    document.getElementById("add2").disabled=false // enable add2 button after saving a time
    updateTime = true // update time when timer is stoped
    save_time(time_string,scramble_string)// save time and scramble (save update delete)
    //save time and scramble before new scramble
    cube_scramble()
    
  }
}
function startTimer() {
  isRunning = true
  startTime = Date.now()
  timerInterval = setInterval(updateTimer, 10)
}
function stopTimer() {
  isRunning = false
  clearInterval(timerInterval)
}
function updateTimer() {
  const elapsedTime = Date.now() - startTime
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60)
  const seconds = Math.floor((elapsedTime / 1000) % 60)
  const milliseconds = Math.floor((elapsedTime % 1000) / 10)

  const timerDisplay = document.getElementById("part2")
  time_string = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`
  timerDisplay.textContent = time_string
}
/*----------------------------------------------------------------------------------------------------------*/
//cube color and scramble
function set_tempColor(){
  for(let i=0; i<9; i++){
      t_up[i] = up[i].style.backgroundColor
      t_left[i] = left[i].style.backgroundColor
      t_front[i] = front[i].style.backgroundColor
      t_right[i] = right[i].style.backgroundColor
      t_back[i] = back[i].style.backgroundColor
      t_down[i] = down[i].style.backgroundColor
  }
}
//color change functions...
function front_move(){
  set_tempColor()
  //up
  up[0].style.backgroundColor = t_up[0]
  up[1].style.backgroundColor = t_up[1]
  up[2].style.backgroundColor = t_up[2]
  up[3].style.backgroundColor = t_up[3]
  up[4].style.backgroundColor = t_up[4]
  up[5].style.backgroundColor = t_up[5]
  up[6].style.backgroundColor = t_left[8]
  up[7].style.backgroundColor = t_left[5]
  up[8].style.backgroundColor = t_left[2]
  //left
  left[0].style.backgroundColor = t_left[0]
  left[1].style.backgroundColor = t_left[1]
  left[2].style.backgroundColor = t_down[0]
  left[3].style.backgroundColor = t_left[3]
  left[4].style.backgroundColor = t_left[4]
  left[5].style.backgroundColor = t_down[1]
  left[6].style.backgroundColor = t_left[6]
  left[7].style.backgroundColor = t_left[7]
  left[8].style.backgroundColor = t_down[2]
  //front
  front[0].style.backgroundColor = t_front[6]
  front[1].style.backgroundColor = t_front[3]
  front[2].style.backgroundColor = t_front[0]
  front[3].style.backgroundColor = t_front[7]
  front[4].style.backgroundColor = t_front[4]
  front[5].style.backgroundColor = t_front[1]
  front[6].style.backgroundColor = t_front[8]
  front[7].style.backgroundColor = t_front[5]
  front[8].style.backgroundColor = t_front[2]
  //right
  right[0].style.backgroundColor = t_up[6]
  right[1].style.backgroundColor = t_right[1]
  right[2].style.backgroundColor = t_right[2]
  right[3].style.backgroundColor = t_up[7]
  right[4].style.backgroundColor = t_right[4]
  right[5].style.backgroundColor = t_right[5]
  right[6].style.backgroundColor = t_up[8]
  right[7].style.backgroundColor = t_right[7]
  right[8].style.backgroundColor = t_right[8]
  //back no change
  //down
  down[0].style.backgroundColor = t_right[6]
  down[1].style.backgroundColor = t_right[3]
  down[2].style.backgroundColor = t_right[0]
  down[3].style.backgroundColor = t_down[3]
  down[4].style.backgroundColor = t_down[4]
  down[5].style.backgroundColor = t_down[5]
  down[6].style.backgroundColor = t_down[6]
  down[7].style.backgroundColor = t_down[7]
  down[8].style.backgroundColor = t_down[8]
}
function left_move(){
  set_tempColor()
  //up
  up[0].style.backgroundColor = t_back[8]
  up[1].style.backgroundColor = t_up[1]
  up[2].style.backgroundColor = t_up[2]
  up[3].style.backgroundColor = t_back[5]
  up[4].style.backgroundColor = t_up[4]
  up[5].style.backgroundColor = t_up[5]
  up[6].style.backgroundColor = t_back[2]
  up[7].style.backgroundColor = t_up[7]
  up[8].style.backgroundColor = t_up[8]
  //left
  left[0].style.backgroundColor = t_left[6]
  left[1].style.backgroundColor = t_left[3]
  left[2].style.backgroundColor = t_left[0]
  left[3].style.backgroundColor = t_left[7]
  left[4].style.backgroundColor = t_left[4]
  left[5].style.backgroundColor = t_left[1]
  left[6].style.backgroundColor = t_left[8]
  left[7].style.backgroundColor = t_left[5]
  left[8].style.backgroundColor = t_left[2]
  //front
  front[0].style.backgroundColor = t_up[0]
  front[1].style.backgroundColor = t_front[1]
  front[2].style.backgroundColor = t_front[2]
  front[3].style.backgroundColor = t_up[3]
  front[4].style.backgroundColor = t_front[4]
  front[5].style.backgroundColor = t_front[5]
  front[6].style.backgroundColor = t_up[6]
  front[7].style.backgroundColor = t_front[7]
  front[8].style.backgroundColor = t_front[8]
  //right no change
  //back
  back[0].style.backgroundColor = t_back[0]
  back[1].style.backgroundColor = t_back[1]
  back[2].style.backgroundColor = t_down[6]
  back[3].style.backgroundColor = t_back[3]
  back[4].style.backgroundColor = t_back[4]
  back[5].style.backgroundColor = t_down[3]
  back[6].style.backgroundColor = t_back[6]
  back[7].style.backgroundColor = t_back[7]
  back[8].style.backgroundColor = t_down[0]
  //down
  down[0].style.backgroundColor = t_front[0]
  down[1].style.backgroundColor = t_down[1]
  down[2].style.backgroundColor = t_down[2]
  down[3].style.backgroundColor = t_front[3]
  down[4].style.backgroundColor = t_down[4]
  down[5].style.backgroundColor = t_down[5]
  down[6].style.backgroundColor = t_front[6]
  down[7].style.backgroundColor = t_down[7]
  down[8].style.backgroundColor = t_down[8]
}
function right_move(){
  set_tempColor()
  //up
  up[0].style.backgroundColor = t_up[0]
  up[1].style.backgroundColor = t_up[1]
  up[2].style.backgroundColor = t_front[2]
  up[3].style.backgroundColor = t_up[3]
  up[4].style.backgroundColor = t_up[4]
  up[5].style.backgroundColor = t_front[5]
  up[6].style.backgroundColor = t_up[6]
  up[7].style.backgroundColor = t_up[7]
  up[8].style.backgroundColor = t_front[8]
  //left no change
  //front
  front[0].style.backgroundColor = t_front[0]
  front[1].style.backgroundColor = t_front[1]
  front[2].style.backgroundColor = t_down[2]
  front[3].style.backgroundColor = t_front[3]
  front[4].style.backgroundColor = t_front[4]
  front[5].style.backgroundColor = t_down[5]
  front[6].style.backgroundColor = t_front[6]
  front[7].style.backgroundColor = t_front[7]
  front[8].style.backgroundColor = t_down[8]
  //right 
  right[0].style.backgroundColor = t_right[6]
  right[1].style.backgroundColor = t_right[3]
  right[2].style.backgroundColor = t_right[0]
  right[3].style.backgroundColor = t_right[7]
  right[4].style.backgroundColor = t_right[4]
  right[5].style.backgroundColor = t_right[1]
  right[6].style.backgroundColor = t_right[8]
  right[7].style.backgroundColor = t_right[5]
  right[8].style.backgroundColor = t_right[2]
  //back
  back[0].style.backgroundColor = t_up[8]
  back[1].style.backgroundColor = t_back[1]
  back[2].style.backgroundColor = t_back[2]
  back[3].style.backgroundColor = t_up[5]
  back[4].style.backgroundColor = t_back[4]
  back[5].style.backgroundColor = t_back[5]
  back[6].style.backgroundColor = t_up[2]
  back[7].style.backgroundColor = t_back[7]
  back[8].style.backgroundColor = t_back[8]
  //down
  down[0].style.backgroundColor = t_down[0]
  down[1].style.backgroundColor = t_down[1]
  down[2].style.backgroundColor = t_back[6]
  down[3].style.backgroundColor = t_down[3]
  down[4].style.backgroundColor = t_down[4]
  down[5].style.backgroundColor = t_back[3]
  down[6].style.backgroundColor = t_down[6]
  down[7].style.backgroundColor = t_down[7]
  down[8].style.backgroundColor = t_back[0]
}
function up_move(){
  set_tempColor()
  //up
  up[0].style.backgroundColor = t_up[6]
  up[1].style.backgroundColor = t_up[3]
  up[2].style.backgroundColor = t_up[0]
  up[3].style.backgroundColor = t_up[7]
  up[4].style.backgroundColor = t_up[4]
  up[5].style.backgroundColor = t_up[1]
  up[6].style.backgroundColor = t_up[8]
  up[7].style.backgroundColor = t_up[5]
  up[8].style.backgroundColor = t_up[2]
  //left
  left[0].style.backgroundColor = t_front[0]
  left[1].style.backgroundColor = t_front[1]
  left[2].style.backgroundColor = t_front[2]
  left[3].style.backgroundColor = t_left[3]
  left[4].style.backgroundColor = t_left[4]
  left[5].style.backgroundColor = t_left[5]
  left[6].style.backgroundColor = t_left[6]
  left[7].style.backgroundColor = t_left[7]
  left[8].style.backgroundColor = t_left[8]
  //front
  front[0].style.backgroundColor = t_right[0]
  front[1].style.backgroundColor = t_right[1]
  front[2].style.backgroundColor = t_right[2]
  front[3].style.backgroundColor = t_front[3]
  front[4].style.backgroundColor = t_front[4]
  front[5].style.backgroundColor = t_front[5]
  front[6].style.backgroundColor = t_front[6]
  front[7].style.backgroundColor = t_front[7]
  front[8].style.backgroundColor = t_front[8]
  //right
  right[0].style.backgroundColor = t_back[0]
  right[1].style.backgroundColor = t_back[1]
  right[2].style.backgroundColor = t_back[2]
  right[3].style.backgroundColor = t_right[3]
  right[4].style.backgroundColor = t_right[4]
  right[5].style.backgroundColor = t_right[5]
  right[6].style.backgroundColor = t_right[6]
  right[7].style.backgroundColor = t_right[7]
  right[8].style.backgroundColor = t_right[8]
  //back
  back[0].style.backgroundColor = t_left[0]
  back[1].style.backgroundColor = t_left[1]
  back[2].style.backgroundColor = t_left[2]
  back[3].style.backgroundColor = t_back[3]
  back[4].style.backgroundColor = t_back[4]
  back[5].style.backgroundColor = t_back[5]
  back[6].style.backgroundColor = t_back[6]
  back[7].style.backgroundColor = t_back[7]
  back[8].style.backgroundColor = t_back[8]
  //down no change
}
function down_move(){
  set_tempColor()
  //up No change
  //left
  left[0].style.backgroundColor = t_left[0]
  left[1].style.backgroundColor = t_left[1]
  left[2].style.backgroundColor = t_left[2]
  left[3].style.backgroundColor = t_left[3]
  left[4].style.backgroundColor = t_left[4]
  left[5].style.backgroundColor = t_left[5]
  left[6].style.backgroundColor = t_back[6]
  left[7].style.backgroundColor = t_back[7]
  left[8].style.backgroundColor = t_back[8]
  //front
  front[0].style.backgroundColor = t_front[0]
  front[1].style.backgroundColor = t_front[1]
  front[2].style.backgroundColor = t_front[2]
  front[3].style.backgroundColor = t_front[3]
  front[4].style.backgroundColor = t_front[4]
  front[5].style.backgroundColor = t_front[5]
  front[6].style.backgroundColor = t_left[6]
  front[7].style.backgroundColor = t_left[7]
  front[8].style.backgroundColor = t_left[8]
  //right
  right[0].style.backgroundColor = t_right[0]
  right[1].style.backgroundColor = t_right[1]
  right[2].style.backgroundColor = t_right[2]
  right[3].style.backgroundColor = t_right[3]
  right[4].style.backgroundColor = t_right[4]
  right[5].style.backgroundColor = t_right[5]
  right[6].style.backgroundColor = t_front[6]
  right[7].style.backgroundColor = t_front[7]
  right[8].style.backgroundColor = t_front[8]
  //back
  back[0].style.backgroundColor = t_back[0]
  back[1].style.backgroundColor = t_back[1]
  back[2].style.backgroundColor = t_back[2]
  back[3].style.backgroundColor = t_back[3]
  back[4].style.backgroundColor = t_back[4]
  back[5].style.backgroundColor = t_back[5]
  back[6].style.backgroundColor = t_right[6]
  back[7].style.backgroundColor = t_right[7]
  back[8].style.backgroundColor = t_right[8]
  //down
  down[0].style.backgroundColor = t_down[6]
  down[1].style.backgroundColor = t_down[3]
  down[2].style.backgroundColor = t_down[0]
  down[3].style.backgroundColor = t_down[7]
  down[4].style.backgroundColor = t_down[4]
  down[5].style.backgroundColor = t_down[1]
  down[6].style.backgroundColor = t_down[8]
  down[7].style.backgroundColor = t_down[5]
  down[8].style.backgroundColor = t_down[2]
}
function back_move(){
  set_tempColor()
  //up
  up[0].style.backgroundColor = t_right[2]
  up[1].style.backgroundColor = t_right[5]
  up[2].style.backgroundColor = t_right[8]
  up[3].style.backgroundColor = t_up[3]
  up[4].style.backgroundColor = t_up[4]
  up[5].style.backgroundColor = t_up[5]
  up[6].style.backgroundColor = t_up[6]
  up[7].style.backgroundColor = t_up[7]
  up[8].style.backgroundColor = t_up[8]
  //left
  left[0].style.backgroundColor = t_up[2]
  left[1].style.backgroundColor = t_left[1]
  left[2].style.backgroundColor = t_left[2]
  left[3].style.backgroundColor = t_up[1]
  left[4].style.backgroundColor = t_left[4]
  left[5].style.backgroundColor = t_left[5]
  left[6].style.backgroundColor = t_up[0]
  left[7].style.backgroundColor = t_left[7]
  left[8].style.backgroundColor = t_left[8]
  //front no change
  //right
  right[0].style.backgroundColor = t_right[0]
  right[1].style.backgroundColor = t_right[1]
  right[2].style.backgroundColor = t_down[8]
  right[3].style.backgroundColor = t_right[3]
  right[4].style.backgroundColor = t_right[4]
  right[5].style.backgroundColor = t_down[7]
  right[6].style.backgroundColor = t_right[6]
  right[7].style.backgroundColor = t_right[7]
  right[8].style.backgroundColor = t_down[6]
  //back
  back[0].style.backgroundColor = t_back[6]
  back[1].style.backgroundColor = t_back[3]
  back[2].style.backgroundColor = t_back[0]
  back[3].style.backgroundColor = t_back[7]
  back[4].style.backgroundColor = t_back[4]
  back[5].style.backgroundColor = t_back[1]
  back[6].style.backgroundColor = t_back[8]
  back[7].style.backgroundColor = t_back[5]
  back[8].style.backgroundColor = t_back[2]
  //down
  down[0].style.backgroundColor = t_down[0]
  down[1].style.backgroundColor = t_down[1]
  down[2].style.backgroundColor = t_down[2]
  down[3].style.backgroundColor = t_down[3]
  down[4].style.backgroundColor = t_down[4]
  down[5].style.backgroundColor = t_down[5]
  down[6].style.backgroundColor = t_left[0]
  down[7].style.backgroundColor = t_left[3]
  down[8].style.backgroundColor = t_left[6]
}

function change_color(randomScramble){
  for(let i=0; i<randomScramble.length; i++){
      //R R2 R`
      if(randomScramble[i][0]==='R'){
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='2')){
              right_move()
          }
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='`')){
              right_move()
              right_move()
          }
          right_move()
      }
      // L L2 L`
      if(randomScramble[i][0]==='L'){
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='2')){
              left_move()
          }
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='`')){
              left_move()
              left_move()
          }
          left_move()
      }
      // U U2 U`
      if(randomScramble[i][0]==='U'){
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='2')){
              up_move()
          }
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='`')){
              up_move()
              up_move()
          }
          up_move()
      }
      // D D2 D`
      if(randomScramble[i][0]==='D'){
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='2')){
              down_move()
          }
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='`')){
              down_move()
              down_move()
          }
          down_move()
      }
      // F F2 F`
      if(randomScramble[i][0]==='F'){
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='2')){
              front_move()
          }
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='`')){
              front_move()
              front_move()
          }
          front_move()
      }
      // B B2 B`
      if(randomScramble[i][0]==='B'){
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='2')){
              back_move()
          }
          if((randomScramble[i].length==2) && (randomScramble[i][1]==='`')){
              back_move()
              back_move()
          }
          back_move()
      }
  }
}

//generate scramble
function generateString() {
  let str = []
  const validCharacters = ['R', 'R2', 'R`', 'L', 'L2', 'L`', 'U', 'U2', 'U`', 'D', 'D2', 'D`', 'F', 'F2', 'F`', 'B', 'B2', 'B`']

  for (let i = 0; ; i++) {
    const randomCharacter = validCharacters[Math.floor(Math.random() * validCharacters.length)]
    //scramble length, loop break
    if (str.length === 25) {
      break
    }
    //remove wrong moves
    if ((str.length != 0) && (str[str.length - 1][0] === randomCharacter[0])) {
      
    }
    else {
      str.push(randomCharacter)
    }
  }
  return str
}
function cube_scramble(){
  set_color() // set default color before every new scramble
  let text=""
  let scramble_area = document.getElementById("part1")
  let scramble = generateString() // creating new scramble

  for(let i=0; i<scramble.length; i++){ // create string from array
    text +=scramble[i] + " "
  }
  scramble_area.innerHTML = text // showing scramble
  scramble_string = text // seting scramble to a gloal value
  change_color(scramble)
}
//get id
function get_id(){
  for(let i=0; i<9; i++){
    let u=document.getElementById(`u${i}`)
    let l=document.getElementById(`l${i}`)
    let f=document.getElementById(`f${i}`)
    let r=document.getElementById(`r${i}`)
    let b=document.getElementById(`b${i}`)
    let d=document.getElementById(`d${i}`)
    up.push(u)
    left.push(l)
    front.push(f)
    right.push(r)
    back.push(b)
    down.push(d)
  }
}
//set color
function set_color(){
  for(let i=0; i<9; i++){
    up[i].style.backgroundColor ="white"
    left[i].style.backgroundColor ="rgb(255, 110, 0)" //orange
    front[i].style.backgroundColor ="rgb(0, 200, 0)" //green
    right[i].style.backgroundColor ="red"
    back[i].style.backgroundColor ="blue"
    down[i].style.backgroundColor ="yellow"
  }
}
/*----------------------------------------------------------------------------------------------------------*/
//data
//save
function save_time(string1, string2) {
  let data = {
    time: string1,
    scramble: string2
  }

  let localData = JSON.parse(localStorage.getItem('solve_time')) || [];
  localData.push(data)

  localStorage.setItem('solve_time', JSON.stringify(localData))
}
//delete
function delete_time(){
  let localData = JSON.parse(localStorage.getItem('solve_time'))
  localData.pop(localData[-1])
  localStorage.setItem('solve_time', JSON.stringify(localData))
  document.getElementById("part2").innerHTML="00:00:00" //chage time of viewport
}
//update
function add_time(){
  //get time from local storage
  let localData = JSON.parse(localStorage.getItem('solve_time'))
  let temp = localData.pop(localData[-1])
  //split time and add 2
  let timeParts = temp.time.split(":")
  let totalSeconds =(parseFloat(timeParts[0]) * 60) + parseFloat(timeParts[1]) + (parseFloat(timeParts[2]) / 100)
  totalSeconds += 2
  // convert time back into string
  let min = Math.floor(totalSeconds / 60)
  let sec = Math.floor(totalSeconds-(min*60))
  let ms = Math.round((totalSeconds%1)*100)
  let time_string = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`
  temp.time=time_string
  document.getElementById("part2").innerHTML=time_string //chage time of viewport
  //add to local storage
  localData.push(temp)
  localStorage.setItem('solve_time', JSON.stringify(localData))
}

/*----------------------------------------------------------------------------------------------------------*/
//DOM
document.addEventListener('DOMContentLoaded', function () {
  //start with a scramble
  get_id()
  cube_scramble()

  //disable time buttons at starting
  document.getElementById("delete").disabled=true
  document.getElementById("add2").disabled=true
  //delete button
  document.getElementById("delete").addEventListener('click', function (){
    document.getElementById("delete").disabled=true
    document.getElementById("add2").disabled=true
      delete_time()
  })
  //add2 button
  document.getElementById("add2").addEventListener('click', function (){
    document.getElementById("add2").disabled=true
      add_time()
  })
  //timer start/stop
  const btn = document.getElementById("part2")
  document.body.addEventListener('keyup', function (e) {
    if (e.key === " ") {
      timer()
    }
  })
  btn.addEventListener('click', function () {
    timer()
    btn.blur() // Remove focus from the button
  })
  
})