const playerEl = document.getElementById('player')
const computerEl = document.getElementById('computer')
const resultEl = document.getElementById('result')
const buttonEl = document.querySelectorAll('.btn')

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const tieScore = document.querySelector('#tieScore')

const winner = document.getElementById('winner')

// console.log(buttonEl)

let playerchoose = ""
let computerChoose = ""
let result = ""

let plscore = ""
let comScore = ""
let tScore = ""

buttonEl.forEach((e)=>{
    e.addEventListener('click', function(){
        playerchoose = e.innerHTML
        playerEl.innerHTML = playerchoose
        randomNum()
        resultOpp()
    })
})


//random number
function randomNum(){
    let random = Math.floor(Math.random()*3)+1
    console.log(random);
    if(random === 1){
        computerChoose = "ROCK"
    }else if(random === 2){
        computerChoose = "PAPER"
    }else if(random === 3){
        computerChoose = "SCISSOR"
    }
    computerEl.innerText = computerChoose
}


function resultOpp(){
    if(playerchoose === computerChoose){
        result = "THIS IS TIE 😁!"
        // resultEl.innerText = result
    }else if(playerchoose == "ROCK" && computerChoose == "PAPER"){
        result = "COMPUTER WIN !"
        // resultEl.innerText = result
    }else if(playerchoose == "PAPER" && computerChoose == "ROCK"){
        result = "PLAYER WIN 🎉!"
        // resultEl.innerText = result
    }else if(playerchoose == "SCISSOR" && computerChoose == "ROCK"){
        result = "COMPUTER WIN !"
        // resultEl.innerText = result
    }else if(playerchoose == "ROCK" && computerChoose == "SCISSOR"){
        result = "PLAYER WIN 🎉!"
        // resultEl.innerText = result
    }else if(playerchoose == "PAPER" && computerChoose == "SCISSOR"){
        result = "COMPUTER WIN !"
        // resultEl.innerText = result
    }else if(playerchoose == "SCISSOR" && computerChoose == "PAPER"){
        result = "PLAYER WIN 🎉!"
        
    }
    resultEl.innerText = result


    // score 
    if(result == "COMPUTER WIN !"){
        comScore ++
        computerScore.innerText = comScore
    }
    else if(result == "PLAYER WIN 🎉!"){
        plscore ++
        playerScore.innerText = plscore
    }
    else if(result == "THIS IS TIE 😁!"){
        tScore ++
        tieScore.innerText = tScore
    }
    

    if(plscore >=5 && comScore <=5){
        winner.innerText = "PLAYER"
    }else if(plscore <=5 && comScore >=5){
        winner.innerText = "COMPUTER"
    }

}

