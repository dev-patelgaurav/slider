//you can change the text, but you need to keep same format [yourtext, color];
let yourtext = [
    ["Developer", "#ffd166"],
    ["Freelancer", "#7DE2D1"],
    ["Coder", "#DE3C4B"],
    ["Designer", "#c3ad45"],
];

let x = 0;
let y = 0;
//how fast typing is
let wait = 200;
//how long you want to text stay before overwriting
let additionalwait = 10;
let txt = yourtext[0][0].split("");
let out = "";
let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
        out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
        if (y == yourtext.length - 1) {
            y = 0;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
        } else {
            y += 1;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
        }
    }
}, wait);