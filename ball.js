let home = document.getElementById("score")
let guest = document.getElementById("scoreG")

let count = 0;
let countG = 0
function one(){

    count += 1
    home.textContent = count
    look()
}

function two(){

    count += 2
    home.textContent = count
    look()
}
function three(){

    count += 3
    home.textContent = count
    look()

}

function oneG(){

    countG += 1
    guest.textContent = countG
    look()
}

function twoG(){

    countG += 2
    guest.textContent = countG
    look()

}
function threeG(){

    countG += 3
    guest.textContent = countG
    look()

}
function reset(){

    countG = 0
    guest.textContent = countG
    document.getElementById("boardG").style.backgroundColor = "black";

    count = 0
    home.textContent = count
    document.getElementById("board").style.backgroundColor = "black";

}

function look(){


if(count>countG){
    document.getElementById("board").style.backgroundColor = "skyblue";
    document.getElementById("boardG").style.backgroundColor = "black";


}
else if(countG>count){
    document.getElementById("boardG").style.backgroundColor = "skyblue";
    document.getElementById("board").style.backgroundColor = "black";

}
else{

}
}