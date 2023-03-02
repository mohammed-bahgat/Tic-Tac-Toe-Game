var board = document.getElementsByClassName("board")[0];
var fields = document.getElementsByClassName("field");
var startHint = document.getElementById("startPlayHint")

var win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


var allowedFields;

function PlayerO(e) {

  //write O in clicked element
  if (!e.target.classList.contains("Done")) {
    e.target.innerHTML = "O";
    e.target.classList.add("Done");
    e.target.classList.add("O");
  } else {
    return;
  }

  startHint.innerHTML = "Well Let's Go"

  //get field which allowed to write x
  GetAllowedFieds();



  //chech If Player O Win
  CheckIfPlayerOWin();

  //Player X
  setTimeout(PlayerX, 600);


  //chech If Player X Win Or Tie
  setTimeout(CheckIfPlayerXWinOrTie, 700);


}


//The Function Which Used
function CheckIfPlayerXWinOrTie() {
  for (let i = 0; i < win.length; i++) {
    if (
      fields[win[i][0]].classList.contains("X") &&
      fields[win[i][1]].classList.contains("X") &&
      fields[win[i][2]].classList.contains("X")
    ) {
      alert("You lose");

      return window.location.reload();
    }
  }
  if (allowedFields.length == 0) {
    alert("Tie");
    return window.location.reload();
  }
}
function CheckIfPlayerOWin() {
  for (let i = 0; i < win.length; i++) {
    if (
      fields[win[i][0]].classList.contains("O") &&
      fields[win[i][1]].classList.contains("O") &&
      fields[win[i][2]].classList.contains("O")
    ) {
      alert("You Win");
      return window.location.reload();
    }
  }
}

function GetAllowedFieds() {
  allowedFields = [];
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].classList.contains("Done")) {
      allowedFields.push(i);
    }
  }
}

function write(field, MyPlay) {
  if (!fields[field].classList.contains("Done")) {
    fields[field].innerHTML = `${MyPlay}`;
    fields[field].classList.add("Done");
    fields[field].classList.add(`${MyPlay}`);
  }
}


function PlayerX() {

  startHint.innerHTML = "Hey it's your turn"
   //Start Attack
  for (let i = 0; i < win.length; i++) {
   
    if (
      fields[win[i][0]].classList.contains("X") &&
      fields[win[i][1]].classList.contains("X") &&
      !fields[win[i][2]].classList.contains("Done")
    ) {
      return write(win[i][2], "X");
    } else if (
      fields[win[i][1]].classList.contains("X") &&
      fields[win[i][2]].classList.contains("X") &&
      !fields[win[i][0]].classList.contains("Done")
    ) {
      return write(win[i][0], "X");
    } else if (
      fields[win[i][0]].classList.contains("X") &&
      fields[win[i][2]].classList.contains("X") &&
      !fields[win[i][1]].classList.contains("Done")
    ) {
      return write(win[i][1], "X");
    } }
    //start Defence
    for (let i = 0; i < win.length; i++) {
    
    if (
      fields[win[i][0]].classList.contains("O") &&
      fields[win[i][1]].classList.contains("O") &&
      !fields[win[i][2]].classList.contains("Done")
    ) {
      return write(win[i][2], "X");
    } else if (
      fields[win[i][1]].classList.contains("O") &&
      fields[win[i][2]].classList.contains("O") &&
      !fields[win[i][0]].classList.contains("Done")
    ) {
      return write(win[i][0], "X");
    } else if (
      fields[win[i][0]].classList.contains("O") &&
      fields[win[i][2]].classList.contains("O") &&
      !fields[win[i][1]].classList.contains("Done")
    ) {
      return write(win[i][1], "X");
    }
  }
  var randIndex = allowedFields[Math.floor(Math.random() * allowedFields.length)];

  return write(randIndex, "X");

}

