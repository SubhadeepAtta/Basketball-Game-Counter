let score1=0
let score2=0;

function displayScore() {
  document.getElementById("scoreHome").textContent=score1
  document.getElementById("scoreGuest").textContent=score2
}

function addOneHome() {
  score1+=1
  displayScore()
}
function addTwoHome() {
  score1+=2
  displayScore()
}
function addThreeHome() {
  score1+=3
  displayScore()
}
function addOneGuest() {
  score2+=1
  console.log(score2)
  displayScore()
}
function addTwoGuest() {
  score2+=2
  displayScore()
}
function addThreeGuest() {
  score2+=3
  displayScore()
}