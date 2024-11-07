const wins = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [4, 5, 6], [3, 6, 9], [7, 8, 9], [3, 5, 7]];
let playerNums = []
let computerNums = []
let allNums = []
let compWon = false
let playerWon = false
let playerstarts = true
let starts = document.querySelector(".starts")
starts.addEventListener("click", ()=>{
    reset()
    if (playerstarts == true){
        starts.innerHTML = 'Player Starts'
        computerChoice()
        playerstarts = false
    }else{
        starts.innerHTML = 'Computer Starts'
        playerstarts = true
    }
})
let winner = document.querySelector(".winner")
let board = document.querySelector(".board")
board.addEventListener("click", (e)=>{
        console.log(allNums)
        if (allNums.length == 9||compWon == true || playerWon == true){
            return
        }
    // alert(e.target.getAttribute("data"))
    let playerChoice = Number(e.target.getAttribute("data"))
    if (!allNums.includes(playerChoice)){
        allNums.push(playerChoice)
        playerNums.push(playerChoice)
        e.target.innerHTML = "X"
        setTimeout(()=>{for (let win of wins){
            // console.log(win[0], playerNums)
            if (playerNums.includes(win[0])&&playerNums.includes(win[1])&&playerNums.includes(win[2])){
                alert("player win")
                playerWon = true
                winner.innerHTML = 'PLAYER WON'
                return
            }
        }
        if (allNums.length>8){
            alert("its a tie")
            return
        }
        computerChoice()}, 300)
        
    }
})

function computerChoice(){
    console.log(allNums)
    if (allNums.length == 9||compWon == true || playerWon == true){
            return
        }
    //  let place = document.querySelectorAll(`[data='${computerNum}']`);
    // let places = document.querySelector(".n2")
    // places.innerHTML = "O"
    let computerNum = Math.floor(Math.random() * 9) + 1;
    while (allNums.includes(computerNum)){
        computerNum = Math.floor(Math.random() * 9) + 1
    }
    allNums.push(computerNum)
    computerNums.push(computerNum)
    let places = document.querySelector(`.n${computerNum}`)
    places.innerHTML = "O"
    setTimeout(()=>{
        for (let win of wins){
        if (computerNums.includes(win[0])&&computerNums.includes(win[1])&&computerNums.includes(win[2])){
            alert("comp win", win)
            compWon=true
            winner.innerHTML = 'COMPUTER WON'
            return
        }
    }
    }, 300)
    
    

}
function reset(){
    allNums = []
    playerNums = []
    computerNums = []
    compWon = false
    playerWon = false
    winner.innerHTML = ''

    for (let i =1;i<10;i++){
        let place = document.querySelector(`.n${i}`)
        place.innerHTML = ''
    }
}

let resetbtn = document.querySelector(".reset")
resetbtn.addEventListener("click", ()=>{
    reset()
})