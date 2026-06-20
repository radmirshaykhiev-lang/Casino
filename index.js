const win = 4;
let money = 10;
var ArkashaDengi = "ZOVGOIDA52421488"

document.getElementById('but67').hidden = true;
function smeshnueKartinkiSmotretOnlainBezRegistrachii(){
    if (money >= 50){
        money = money - 50;
        document.getElementById("balance").textContent = "Баланс: " + money + " " + ArkashaDengi;
        window.open("smeshnieKartinki.html", "_blank");
    }
}

function f67(){
    for(i = 0; i<=67; i++){
        window.open("mango.html", "_blank");
    }
}

function watchAdd(){
    money = money + 100;
    document.getElementById("balance").textContent = "Баланс: " + money + " " + ArkashaDengi;
    window.open("https://lexa-sosun.github.io/arkadiy/adv/")
}

function clikDengiPlusPlus(){ 
    if (money <= 0) {
        alert("Fuck you, you are bankrupt! Game over.");
        return;
    }
    money++;
    if (money == 5 || money == -5 || money == -6 || money == 6 || money == 7 || money == -7 || money == -8 || money == 8 || money == 9 || money == -9  || money == 11 || money == 10 || money == 12 || money == 13 || money == 14 || money == 15 || money == 16 || money == 17 || money == 18 || money == 19 || lastNomer(money) == 5 || lastNomer(money) == 6 || lastNomer(money) == 7 || lastNomer(money) == 8 || lastNomer(money) == 9){
        ArkashaDengi = "Аркадий-коинов" 
    }
    if(money == 1 || money == -1 || lastNomer(money) == 1 ){
        ArkashaDengi = "Аркадий-коин"
    }else if(money == 2 || money ==-2 || lastNomer(money) == 2 || money == 3 || money ==-3 || lastNomer(money) == 3 || money == 2 || money ==-4 || lastNomer(money) == 4){
        ArkashaDengi = "Аркадий-коина"
    }
    document.getElementById("balance").textContent = "Баланс: " + money + " " + ArkashaDengi;
    if(money == 67){
        document.getElementById('but67').hidden = false;
    }
    else
    {
        document.getElementById('but67').hidden = true;
    }
}
function lastNomer(number){
    return Math.abs(number) % 10;
}
function play() {
    // Проверка на банкротство
    if (money <= 0) {
        alert("Fuck you, you are bankrupt! Game over.");
        return;
    }

    var loseOrWin = Math.floor(Math.random() * 10) + 1; 
//я еблан походу    
    if (loseOrWin > win) {
        money = money + (loseOrWin - win);
    } else {
        money = money - (loseOrWin + win);
    }
    if (money == 5 || money == -5 || money == -6 || money == 6 || money == 7 || money == -7 || money == -8 || money == 8 || money == 9 || money == -9  || money == 11 || money == 10 || money == 12 || money == 13 || money == 14 || money == 15 || money == 16 || money == 17 || money == 18 || money == 19 || lastNomer(money) == 5 || lastNomer(money) == 6 || lastNomer(money) == 7 || lastNomer(money) == 8 || lastNomer(money) == 9){
        ArkashaDengi = "Аркадий-коинов" 
    }
    if(money == 1 || money == -1 || lastNomer(money) == 1 ){
        ArkashaDengi = "Аркадий-коин"
    }else if(money == 2 || money ==-2 || lastNomer(money) == 2 || money == 3 || money ==-3 || lastNomer(money) == 3 || money == 2 || money ==-4 || lastNomer(money) == 4){
        ArkashaDengi = "Аркадий-коина"
    }



    document.getElementById("balance").textContent = "Баланс: " + money + " " + ArkashaDengi;
    if(money == 67){
        document.getElementById('but67').hidden = false;
    }
    else
    {
        document.getElementById('but67').hidden = true;
    }
}
function re(){
    money = 10
     document.getElementById("balance").textContent = "Баланс: " + money + " " + ArkashaDengi;

}
//document.getElementById('but67').hidden = 'true';
//if (money == 50){
//    document.getElementById('but67').style.display = 'false';
//}
