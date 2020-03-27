const WS = new WebSocket('ws://localhost:3333')
var username

WS.onopen = ()=>{
  document.querySelector("#status").innerHTML = 'Chat Connected!'
}

WS.onclose = ()=>{
  document.querySelector("#status").innerHTML = 'Chat Disconnected!'
}

WS.onmessage = (payload)=>{
  displaymessages(payload.data)
  console.log(payload.data)
}

function displaymessages(msg){
  let a = document.createElement('div')
  a.classList.add("w3-rest")
  let b = document.createElement('p')
  b.innerHTML = msg
  // b.classList.add("w3-input")
  a.appendChild(b)
  document.querySelector('#messenger').appendChild(a)
}

document.getElementById('form0').onsubmit = function (){
  let input = document.getElementById('name').value
  // WS.send(input)
  username = input+': '
  document.getElementById('form0').style.display = 'none'
  document.getElementById('form1').style.display = 'block'
}

document.getElementById('form1').onsubmit = function (){
  let input = document.getElementById('message')
  WS.send(username + input.value)
  input.value = ''
}
