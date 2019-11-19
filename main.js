//Maro kart random Box 


//Event lIsteners
document.getElementById('button').addEventListener('click', spin)
document.getElementById('Spin5').addEventListener('click', spin5)
document.getElementById('enter').addEventListener('click', Enter)
document.getElementById('bullet10').addEventListener('click', spin10)

// Global variables
let bananaNum = 0
let BulletNum = 0
let mushroomNum = 0
let greenShellNum = 0
let starNum = 0
let spinsNum;

//Fucntion for randomizing
function spin() {
    let random = Math.random(); // random decimal from 0 to 1 

    if (random <= 0.25) {
        document.getElementById('mainImg').src = 'images/Banana.png';
        document.getElementById("List").innerHTML += '<img src="images/Banana.png">';
    } else if (random <= 0.5) {
        document.getElementById('mainImg').src = 'images/Green_Shell.png'
        document.getElementById("List").innerHTML += '<img src="images/Green_Shell.png">';
    } else if (random <= 0.65) {
        document.getElementById('mainImg').src = 'images/Star.png'
        document.getElementById("List").innerHTML += '<img src="images/Star.png">';
    } else if (random <= 0.8) {
        document.getElementById('mainImg').src = 'images/Golden_Mushroom.png'
        document.getElementById("List").innerHTML += '<img src="images/Golden_Mushroom.png">';
    } else {
        document.getElementById('mainImg').src = 'images/Bullet_Bill.png'
        document.getElementById("List").innerHTML += '<img src="images/Bullet_Bill.png">';
        BulletNum++;
    }
}
// loop 5 times
function spin5() {
    for (let a = 0; a < 100; a++)
        spin()

}
//Loop x times 
function Enter() {
    spinsNum = Number(document.getElementById('number').value);
    for (let n = 0; n < spinsNum; n++) {

        spin()

    }


}
// loop 10 times 
function spin10() {
    BulletNum = 0
    while (BulletNum < 10) {
        spin()
    }
}