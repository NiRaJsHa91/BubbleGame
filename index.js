var score = 0;
var randomHit = null;
var timer = 60;
var gameEndDiv='';

function bubbleRecreate() {
  var allBubbles = "";

  for (let i = 1; i <= 192; i++) {
    const randomInt = Math.floor(Math.random() * 10);
    allBubbles = allBubbles + `<div class="bubble">${randomInt}</div>`;
  }

  document.querySelector(".main-bottom").innerHTML = allBubbles;
}

bubbleRecreate();
updateRandomHit();
timerFunc();
// main();

function updateRandomHit() {
  randomHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = randomHit;
}

function timerFunc() {
  var timerInt = setInterval(() => {
    //we will have to store setInterval in order to clear
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    } else {
      gameEndDiv = `<div class="gameEndDiv">
                        <h2>Game is over</h2>
                        <h4>score : <span>${score}</span></h4>
                        <button id = 'refresh_btn'>Play Again ?</button>
                    </div>`;
      document.querySelector(".main").innerHTML = gameEndDiv;
      clearInterval(timerInt);
    }
  }, 1000);
}

function incScore(){
    score=score+1;
    document.querySelector("#score").style.color = '#486748'
    document.querySelector("#score").innerHTML = score;
}

function decScore(){
    score = score - 1;
    document.querySelector("#score").style.color = 'red'
    document.querySelector("#score").innerHTML = score;
}



  const getBubblesContainer = document.querySelector(".main-bottom");
  getBubblesContainer.addEventListener("click", function checkMatch(desc) {
       if(desc.target.innerHTML == randomHit){
          updateRandomHit();
          incScore();
          bubbleRecreate();      
        } else{
          updateRandomHit();
          decScore();
          bubbleRecreate();         
        }
        
      })
 

 
setTimeout(()=>{

const refresh = document.getElementById('refresh_btn')
    refresh.addEventListener('click',(e)=>{
     e.preventDefault()
     window.location.reload()
    })

},61000)
    
   
  




