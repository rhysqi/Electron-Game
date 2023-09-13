document.addEventListener('keypress', (Event) =>
{
    let keycode = Event.key;
    var digit = Math.floor(Math.random(digit) * 3);
    let player = document.getElementById('out-player');
    let bot = document.getElementById('out-com');
    if (keycode == 1) {
        player.innerHTML = ' <img src="media/1.jpg" style="width: 80px; transform: rotate(-120deg); position: absolute; margin-top: 35px; margin-left: -40px" />';
        if (digit == 0){
            bot.innerHTML = ' <img src="media/1.jpg" style="width: 80px; transform: rotate(80deg); position: absolute; margin-top: 35px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Draw"; document.getElementById("Player-Score").innerHTML = "Draw";
        }else if(digit == 1){
            bot.innerHTML = ' <img src="media/2.jpg" style="width: 80px; transform: rotate(-90deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Win"; document.getElementById("Player-Score").innerHTML = "Lose";
        }else{
            bot.innerHTML = ' <img src="media/3.jpg" style="width: 80px; transform: rotate(120deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Lose"; document.getElementById("Player-Score").innerHTML = "Win";
        }
    }
    else if( keycode == 2){
        player.innerHTML = ' <img src="media/2.jpg" style="width: 80px; transform: rotate(90deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
        if (digit == 0){
            bot.innerHTML = ' <img src="media/1.jpg" style="width: 80px; transform: rotate(80deg); position: absolute; margin-top: 35px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Lose"; document.getElementById("Player-Score").innerHTML = "Win";
        }else if(digit == 1){
            bot.innerHTML = ' <img src="media/2.jpg" style="width: 80px; transform: rotate(-90deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Draw"; document.getElementById("Player-Score").innerHTML = "Draw";
        }else{
            bot.innerHTML = ' <img src="media/3.jpg" style="width: 80px; transform: rotate(120deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Win"; document.getElementById("Player-Score").innerHTML = "Lose";
        }
    }
    else if(keycode == 3){
        player.innerHTML = ' <img src="media/3.jpg" style="width: 80px; transform: rotate(-60deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
        document.getElementById("com-score").innerHTML = "Lose"; document.getElementById("Player-Score").innerHTML = "Win";
        if (digit == 0){
            bot.innerHTML = ' <img src="media/1.jpg" style="width: 80px; transform: rotate(80deg); position: absolute; margin-top: 35px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Win"; document.getElementById("Player-Score").innerHTML = "Lose";
        }else if(digit == 1){
            bot.innerHTML = ' <img src="media/2.jpg" style="width: 80px; transform: rotate(-90deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
        }else{
            bot.innerHTML = ' <img src="media/3.jpg" style="width: 80px; transform: rotate(120deg); position: absolute; margin-top: 25px; margin-left: -40px" />';
            document.getElementById("com-score").innerHTML = "Draw"; document.getElementById("Player-Score").innerHTML = "Draw";
        }
    }else{
        null;
    }
}, false);
document.onkeydown = function (r){
    if (r.ctrlKey && (r.keyCode === 67 || r.keyCode === 86 || r.keyCode === 85 || r.keyCode === 117))
        { alert("Mau Ngapain ??"); return false;}
};

function BStart(Event)
{
    location.reload();
};
function BHelp(Event)
{
    let text1 = "Tekan 1 untuk gunting"; let text2 = "Tekan 2 untuk Batu"; const text3 = "Tekan 3 untuk Kertas"; let text4 = "Tekan S Untuk Mulai";
    alert(text1 + "\n" + text2 + "\n" +text3 + "\n" +text4);
};

document.addEventListener('keypress', (Event) =>{
    let code = Event.key;
    if (code == 's'){
        location.reload();
    }
    else if (code == 'h'){
        let text1 = "Tekan 1 untuk gunting"; let text2 = "Tekan 2 untuk Batu"; const text3 = "Tekan 3 untuk Kertas"; let text4 = "Tekan S Untuk Mulai";
        alert(text1 + "\n" + text2 + "\n" +text3 + "\n" +text4);
    };
});