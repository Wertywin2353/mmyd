const params = new URLSearchParams(Telegram.WebApp.initData);
let songName;
let songCol;
let version = "1.0Beta";

const userData = Object.fromEntries(params);
userData.user = JSON.parse(userData.user);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

window.onload = function () {
    api.src = "api/?mode=boot&app.version=" + version + "&user=" + userData.user.username + "&user.lang=" + userData.user.language_code;
    document.getElementById("version").firstChild.data = version;
    let x = getRandomIntInclusive(1, 10);
    if(x == 1) {
        window.audio1 = new Audio("songs/Kill_Eva-Psycho_Dreams.mp3");
        songName = "Kill Eva - Psycho Dreams";
        songCol = "midnightblue";
    }
    else if(x == 2) {
        window.audio1 = new Audio("songs/KSLV_Noh-Override.mp3");
        songName = "KSLV Noh - Override";
        songCol = "red";
    }
    else if(x == 3) {
        window.audio1 = new Audio("songs/murkish-Wasted_(Nightcore).mp3");
        songName = "murkish - Wasted (Nightcore)";
        songCol = "purple";
    }
    else if(x == 4) {
        window.audio1 = new Audio("songs/OGNEYAR-Devotion.mp3");
        songName = "OGNEYAR - Devotion";
        songCol = "orange";
    }
    else if(x == 5) {
        window.audio1 = new Audio("songs/plenka-Nightmare.mp3");
        songName = "plenka - Nightmare";
        songCol = "blue";
    }
    else if(x == 6) {
        window.audio1 = new Audio("songs/Righteous_Mo-Beats.mp3");
        songName = "Righteous Mo - Beats";
        songCol = "green";
    }
    else if(x == 7) {
        window.audio1 = new Audio("songs/Sardine_Slayer-Bad_Piggies_Drip.mp3");
        songName = "Sardine Slayer - Bad Piggies Drip";
        songCol = "lime";
    }
    else if(x == 8) {
        window.audio1 = new Audio("songs/trippie_redd-miss_the_rage_instrumental.mp3");
        songName = "trippie redd - miss the rage (instrumental)";
        songCol = "aqua";
    }
    else if(x == 9) {
        window.audio1 = new Audio("songs/Viliam_Lane-particles.mp3");
        songName = "Viliam Lane - particles";
        songCol = "darkred";
    }
    else if(x == 10) {
        window.audio1 = new Audio("songs/VØJ-Memory_Reboot.mp3");
        songName = "VØJ - Memory Reboot";
        songCol = "cyan";
    }
    audio1.volume = 0.1;
    document.getElementById('username').firstChild.data = userData.user.username;
}

