// basic Var
const item = document.querySelectorAll(".items");
const title = document.getElementById("title");
const head = document.querySelector(".head");
let countX = document.getElementById("countX");
let countO = document.getElementById("countO");
const winerAudio = new Audio('./winer.mp3');
let turn = "X";
let counterGame = 0
// ..............................
// this basic FUNction to get id div and change inertext to X || O
function game(id) {
  let itemClick = document.getElementById(id);
  if (turn === "X" && itemClick.innerHTML == "") {
    itemClick.innerHTML = "X";
    turn = "O";
    title.innerText = "Now it's O's turn";
    itemClick.classList.add("active");
    win();
  } else if (turn === "O" && itemClick.innerHTML == "") {
    itemClick.innerHTML = "O";
    turn = "X";
    title.innerText = "Now it's X's turn";
    itemClick.classList.add("active");
    win();
  }
}
// ..........................................
// this Function to change Style if player win and rest var Turn to X || O 
function END(NUM1, NUM2, NUM3) {
  head.classList.add("headWin");
  title.innerHTML = item[NUM1].innerHTML + " your Win ";
  item[NUM1].classList.add("winitem");
  item[NUM2].classList.add("winitem");
  item[NUM3].classList.add("winitem");
  const idInterval = window.setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
    if (item[NUM1].innerHTML == "O") {
      countO.innerText = (parseInt(countO.innerText,10) + 1).toString();
      plyerWIN()
      turn = "O"
    } else if (item[NUM1].innerHTML == "X") {
      countX.innerText = (parseInt(countX.innerText,10) + 1).toString();
      plyerWIN()
      turn = "X"
    }
  window.setTimeout(() => {
    clear(idInterval,item[NUM1].innerHTML);
  }, 2500);
}
// ..........................................
// this Function to Cheack if Win case really happened when case don't happen cheack if draw case
function win() {
  if (
    item[0].innerHTML == item[1].innerHTML &&
    item[1].innerHTML == item[2].innerHTML &&
    item[0].innerHTML != ""
  ) {
    END(0, 1, 2);
  } else if (
    item[3].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[5].innerHTML &&
    item[3].innerHTML != ""
  ) {
    END(3, 4, 5);
  } else if (
    item[6].innerHTML == item[7].innerHTML &&
    item[7].innerHTML == item[8].innerHTML &&
    item[6].innerHTML != ""
  ) {
    END(6, 7, 8);
  } else if (
    item[0].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[8].innerHTML &&
    item[0].innerHTML != ""
  ) {
    END(0, 4, 8);
  } else if (
    item[2].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[6].innerHTML &&
    item[2].innerHTML != ""
  ) {
    END(2, 4, 6);
  } else if (
    item[0].innerHTML == item[3].innerHTML &&
    item[3].innerHTML == item[6].innerHTML &&
    item[0].innerHTML != ""
  ) {
    END(0, 3, 6);
  } else if (
    item[1].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[7].innerHTML &&
    item[1].innerHTML != ""
  ) {
    END(1, 4, 7);
  } else if (
    item[2].innerHTML == item[5].innerHTML &&
    item[5].innerHTML == item[8].innerHTML &&
    item[2].innerHTML != ""
  ) {
    END(2, 5, 8);
  } else if (cheack()) {
    head.classList.add("headDraw");
    title.innerHTML = " is Draw ";
    const idInterval = window.setInterval(() => {
      title.innerHTML += ".";
    }, 1000);
    window.setTimeout(() => {
      clear(idInterval);
    }, 4000);
  }
}
// ..........................................
// this Function to cheack draw case
function cheack() {
  const Draw1 =
    item[2].innerHTML == item[3].innerHTML &&
    item[3].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[8].innerHTML &&
    item[2].innerHTML != "";
  const Draw2 =
    item[1].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[6].innerHTML &&
    item[6].innerHTML == item[8].innerHTML &&
    item[1].innerHTML != "";
  const Draw3 =
    item[0].innerHTML == item[2].innerHTML &&
    item[2].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[7].innerHTML &&
    item[0].innerHTML != "";
  const Draw4 =
    item[0].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[5].innerHTML &&
    item[5].innerHTML == item[6].innerHTML &&
    item[0].innerHTML != "";
  const Draw5 =
    item[2].innerHTML == item[3].innerHTML &&
    item[3].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[7].innerHTML &&
    item[2].innerHTML != "";
  const Draw6 =
    item[0].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[5].innerHTML &&
    item[5].innerHTML == item[7].innerHTML &&
    item[0].innerHTML != "";
  const Draw7 =
    item[1].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[5].innerHTML &&
    item[5].innerHTML == item[6].innerHTML &&
    item[1].innerHTML != "";
  const Draw8 =
    item[1].innerHTML == item[3].innerHTML &&
    item[3].innerHTML == item[4].innerHTML &&
    item[4].innerHTML == item[8].innerHTML &&
    item[1].innerHTML != "";
  if (
    Draw1 ||
    Draw2 ||
    Draw3 ||
    Draw4 ||
    Draw5 ||
    Draw6 ||
    Draw7 ||
    Draw8
  ) {
    return true;
  }
}
// ..........................................
// this Function to rest element to first visit and return what happen in win and draw
function clear(id,xORo) {
  head.classList.remove("headWin");
  head.classList.remove("headDraw");
  clearInterval(id);
  for (let index = 0; index < item.length; index++) {
    item[index].innerHTML = "";
    item[index].classList.remove("winitem");
    item[index].classList.remove("active");
  }
  if(xORo == 'O'){
    title.innerText = "Now it's O's turn";
  }
  else if(xORo == 'X'){
    title.innerText = "Now it's X's turn";
  }else{
    if(parseInt(countX.innerText,10)>parseInt(countO.innerText,10)){
      title.innerText = "Now it's X's turn";
    turn = "X";
    }else if(parseInt(countX.innerText,10)<parseInt(countO.innerText,10)){
    title.innerText = "Now it's O's turn";
    turn = "O";
    }else{
      title.innerText = "tic tac";
    }
  }
}
// ..........................................
// this Function to get name user and counter Game
function start() {
  clear('','')
  sectionO.classList.remove("displayNONE")
  sectionX.classList.remove("displayNONE")
  countO.innerText='0'
  countX.innerText='0'
  startDialog.classList.add("displayNONE")
  TitlePlayerX.innerHTML = (Xplayer.value!='')?Xplayer.value+' (X)':"X"
  TitlePlayerO.innerHTML = (Oplayer.value!='')?Oplayer.value+' (O)':"O"
  counterGame = parseInt( CounterGame.value,10)
}
// ..........................................
// ..........................................

function showDialog(){
  startDialog.classList.remove("displayNONE")
}
// ..........................................
// ..........................................
//this function cheack if player ecoule counter Game 
function plyerWIN() {
  if(parseInt(countX.innerText,10)==counterGame){
    WINsection.classList.remove("displayNONE")
    winName.innerHTML = (Xplayer.value!='')?Xplayer.value+" your WIN":"X your WIN"
    winerAudio.play();
    setTimeout(() => {
      window.location.reload()
    }, 4000);
  }else if(parseInt(countO.innerText,10)==counterGame){
    WINsection.classList.remove("displayNONE")
    winName.innerHTML = (Oplayer.value!='')?Oplayer.value+" your WIN":"O your WIN"
    winerAudio.play();
    setTimeout(() => {
      window.location.reload()
    }, 4000);
  }
}
