
document.querySelector(".roll-button").onclick = function rollDice() {
    let diceLeft =  document.querySelector(".img1");
    let diceNumberLeft = Math.floor(Math.random() * 6);
    let diceRight =  document.querySelector(".img2");
    let diceNumberRight = Math.floor(Math.random() * 6);
    let heading = document.querySelector(".announce-outcome");
    
    if (diceNumberLeft === 0) {
        diceLeft.setAttribute("src", "/images/dice1.png")
    } else if (diceNumberLeft === 1) {
        diceLeft.setAttribute("src", "/images/dice2.png")
    } else if (diceNumberLeft === 2) {
        diceLeft.setAttribute("src","/images/dice3.png")
    } else if (diceNumberLeft === 3) {
        diceLeft.setAttribute("src","/images/dice4.png")
    } else if (diceNumberLeft === 4) {
        diceLeft.setAttribute("src","/images/dice5.png")
    } else {
        diceLeft.setAttribute("src", "/images/dice6.png")
    }
    
    if (diceNumberRight === 0) {
        diceRight.setAttribute("src", "/images/dice1.png")
    } else if (diceNumberRight === 1) {
        diceRight.setAttribute("src", "/images/dice2.png")
    } else if (diceNumberRight === 2) {
        diceRight.setAttribute("src","/images/dice3.png")
    } else if (diceNumberRight === 3) {
        diceRight.setAttribute("src","/images/dice4.png")
    } else if (diceNumberRight === 4) {
        diceRight.setAttribute("src","/images/dice5.png")
    } else {
        diceRight.setAttribute("src", "/images/dice6.png")
    }
    
    if (diceNumberLeft > diceNumberRight) {
        heading.innerHTML = "Player One Wins!";
    } else if (diceNumberLeft < diceNumberRight){
        heading.innerHTML = "Player Two Wins!";
    } else {
        heading.innerHTML = "Draw!";
    }
} 
