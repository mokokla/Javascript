
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
    let randomFighterNumber= Math.floor(Math.random()*5) +1;
    if(randomFighterNumber==1){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/scissors.png" >
        `;
    }
    if(randomFighterNumber==2){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/rock.png" >
        `;
    }
    if(randomFighterNumber==3){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/paper.png" >
        `;
    }
    if(randomFighterNumber==4){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/lizzard.png" >
        `;
    }
    if(randomFighterNumber==5){
        let img2 = document.getElementById('opponentPicture').innerHTML=`
        <img src= "assets/spock.png" >
        `;
    }
    return randomFighterNumber;
}
function getWinner(){
    var choosenFighter = document.getElementById("playerInput").value;
    var randomfighter = generateRandomOpponentCharakter()
    console.log(randomfighter)
    var hasPlayerWon= false;
    //let opponentchar = ["scissors","rock","paper","lizzard","spock"]
    //array.forEach(element => {  
    //});
}

