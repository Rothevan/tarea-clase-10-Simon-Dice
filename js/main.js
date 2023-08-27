  function playAudio(idboton) {
    var audio = document.getElementById("audio-"+idboton);
    audio.play();
  }
  currentplayer = document.getElementById("jugando")
  currentround = document.getElementById("ronda")
  playerpattern = []
  gamepattern = []
  round = 1
function gameStart(){
    startbutton = document.getElementById("comenzar-juego")
    console.log(startbutton.id)
    startbutton.style = "display: none"
   currentplayer.innerHTML= "Turno del Ordenador"
   currentround.innerHTML= "Ronda " + round
   setTimeout(() => {
    computerTurn();
    }, 1000)
}
let patterncount = 0

function clicked(idboton) {
    document.getElementById(idboton).classList.toggle('unclicked')
    setTimeout(function(){
        document.getElementById(idboton).classList.toggle('unclicked')},1000);
if (currentplayer.innerHTML === "Turno del Jugador") {
    playerpattern.push(idboton)
    console.log("playerpattern es " + playerpattern)
    console.log("Gamepattern es " + gamepattern)
    if (playerpattern[patterncount] === gamepattern[patterncount]){
        console.log(" El player pattern by count es " + playerpattern[patterncount])
        console.log("El gamepattern by coutn es " + gamepattern[patterncount])
    patterncount ++
        if (playerpattern.length === gamepattern.length){
            console.log(playerpattern.length)
            console.log(gamepattern.length)
            setTimeout(() => {
                playAudio("otra-ronda");
                }, 500)
        patterncount = 0
        playerpattern.length = 0
        currentplayer.innerHTML= "Turno del Ordenador"
        setTimeout(computerTurn, 2000)
        
        
    }
    }
    
    else { gameOver()}

    }
       }



function computerTurn() {
    document.getElementById("campodejuego").classList.toggle('computerturn')
if (round > 0) {
    gamepattern.forEach((color, i) => {
        setTimeout(() => {
        document.getElementById(color).click();
        }, i * 1000);
      })
      round ++
      currentround.innerHTML= "Ronda " + round   
    };

setTimeout(() => {
chosenNumber = Math.random()
console.log(chosenNumber)
if (chosenNumber <= 0.24) {
chosenColor = "boton-rojo"
}
else if (chosenNumber >= 0.25 && chosenNumber <= 0.49) {
chosenColor = "boton-azul"
}
else if (chosenNumber >= 0.50 && chosenNumber <= 0.74) {
    chosenColor = "boton-amarillo"
}
else {
        chosenColor = "boton-verde"        
}
buttontoclick = document.getElementById(chosenColor)
buttontoclick.click()
console.log(chosenColor)
gamepattern.push(chosenColor)
console.log(gamepattern)
document.getElementById("campodejuego").classList.toggle('computerturn')

setTimeout(() => {currentplayer.innerHTML= "Turno del Jugador"}, 1000)}, 1000*gamepattern.length)}

function gameOver(){
    playAudio("gameover")    
}