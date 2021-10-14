//what do i need to get the game going?
//need to select all the boxes and change there innerText per click

// boxes.style.backgroundColor = "Green"
//creating variables
let turn = "X"
let gameOver = false;
// logicbuilding
const changeturn = ()=>{
    return turn === "X"? "0":"X";
}
function gameOverPrompt(){
    if(gameOver === true){
        alert('Game Over')
    }
}
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText)&& (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            gameOver = true;
        }
    })
}
const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener("click",()=>{
        if (boxText.innerText ==="") {
            boxText.innerText = turn;
            turn = changeturn();
            checkWin();
        }
        
    })
})
//reset button
document.getElementById('myBtn').addEventListener('click',()=>{
    let boxText = document.getElementsByClassName('boxText');
    document.querySelector('.info').innerText = ""
    Array.from(boxText).forEach(element =>{
        element.innerText = ""
    })
})