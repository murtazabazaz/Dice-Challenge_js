let player1 = Math.floor(Math.random()*6 +1);
let player2 = Math.floor(Math.random()*6 +1);

if(player1 < player2){
    document.querySelector("h1").textContent  = "🎉Player 2 Wins"
}
else if(player1 > player2){
    document.querySelector("h1").textContent  = "🎉Player 1 Wins"
}
else{
    document.querySelector("h1").textContent  = "It is a Draw🏳️"
}
// changing the images for player 1...

let RandomImg1 = "images/dice" + player1 + ".png" 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomImg1);

// changing the images for player 2...

let RandomImg2 = "images/dice" + player2 + ".png" 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", RandomImg2);




// changing the images for player 1...
/*
if(player1 == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(player1 == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(player1 == 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(player1 == 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(player1 == 5 ){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

// changing the images for player 2...
if(player2 == 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if(player2 == 2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if(player2 == 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if(player2 == 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if(player2 == 5 ){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
*/
console.log(player1)
console.log(player2)