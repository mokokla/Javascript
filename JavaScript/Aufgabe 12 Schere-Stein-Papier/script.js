
///var PlayerImage = document.getElementById("playerImage");

let img1= document.querySelector("img");
let opponentFighter;
let img2 = document.getElementById('opponentPicture').innerHTML=`
 <img src= "assets/nothing.png" >
 `;

function fight(){
getPlayersInput();
generateRandomOpponentCharakter()
getWinner()
}
function getPlayersInput(){
    var choosenFighter = document.getElementById("playerInput").value;
    if(choosenFighter=="scissors"){
        img1.src='assets/scissors.png'
    }
    if(choosenFighter=="rock"){
        img1.src='assets/rock.png'
    }
    if(choosenFighter=="paper"){
        img1.src='assets/paper.png'
    }
    if(choosenFighter=="lizzard"){
        img1.src='assets/lizzard.png'
    }
    if(choosenFighter=="spock"){
        img1.src='assets/spock.png'
    }
}
function generateRandomOpponentCharakter(){
    let randomFighter= Math.floor(Math.random()*5) +1;
    if(randomFighter==1){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/scissors.png" >
        `;
    }
    if(randomFighter==2){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/rock.png" >
        `;
    }
    if(randomFighter==3){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/paper.png" >
        `;
    }
    if(randomFighter==4){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/lizzard.png" >
        `;
    }
    if(randomFighter==5){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/spock.png" >
        `;
    }
}
function getWinner(){
    var choosenFighter = document.getElementById("playerInput").value;
    console.log()
}

